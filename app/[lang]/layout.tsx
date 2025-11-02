// app/[lang]/layout.tsx
import type { Metadata } from "next";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
// Note: We don't strictly need to import globals.css here again,
// but it doesn't hurt. The root layout already loaded it.
import "../globals.css"; 

// All of this top part (generateStaticParams, generateMetadata, types) is correct
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langString } = await params;
  const lang = langString as Locale;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://www.juglans.ai';
  const ogImageUrl = `${baseUrl}/og-image-${lang}.png`;

  return {
    title: {
      default: dictionary.metadata.title,
      template: '%s | Juglans',
    },
    description: dictionary.metadata.description,
    // ... rest of metadata object is fine
    icons: { icon: '/logo.svg', shortcut: '/logo.svg', apple: '/logo.svg' },
    openGraph: { title: dictionary.metadata.title, description: dictionary.metadata.description, url: baseUrl, siteName: 'Juglans', images: [ { url: ogImageUrl, width: 1200, height: 630, } ], locale: lang, type: 'website' },
    twitter: { card: 'summary_large_image', title: dictionary.metadata.title, description: dictionary.metadata.description, images: [ogImageUrl] },
  };
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

// ==================== THE CRITICAL CHANGE IS HERE ====================
export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang: langString } = await params;
  const lang = langString as Locale; // This is fine
  const baseUrl = 'https://www.juglans.ai';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Juglans',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
  };

  // We return ONLY the content specific to this layout level.
  // NO <html> or <body> tags! A React Fragment is perfect here.
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}