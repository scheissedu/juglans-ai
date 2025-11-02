// app/[lang]/layout.tsx
import type { Metadata } from "next";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import "../globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  // IMPORTANT: Replace with your actual domain upon deployment
  const baseUrl = 'https://www.juglans.ai';

  // Dynamically create the OG image URL based on the current language
  const ogImageUrl = `${baseUrl}/og-image-${params.lang}.png`;

  return {
    title: {
      default: dictionary.metadata.title,
      template: '%s | Juglans',
    },
    description: dictionary.metadata.description,
    icons: {
      icon: '/logo.svg',
      shortcut: '/logo.svg',
      apple: '/logo.svg',
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: baseUrl,
      siteName: 'Juglans',
      images: [
        {
          url: ogImageUrl, // Use the dynamic URL
          width: 1200,
          height: 630,
        },
      ],
      locale: params.lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: [ogImageUrl], // Use the dynamic URL here as well
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  // IMPORTANT: Replace with your actual domain upon deployment
  const baseUrl = 'https://www.juglans.ai';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Juglans',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
  };

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}