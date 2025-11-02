// app/[lang]/layout.tsx
import type { Metadata } from "next";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import "../globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// ==================== 修改 #1 (generateMetadata) ====================
// 我们同样遵循 Promise<string> 的模式
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>; // 1. params is a Promise resolving to { lang: string }
}): Promise<Metadata> {
  const { lang: langString } = await params; // 2. await it
  const lang = langString as Locale; // 3. Assert it to our specific Locale type
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://www.juglans.ai';
  const ogImageUrl = `${baseUrl}/og-image-${lang}.png`;

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
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
      ],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: [ogImageUrl],
    },
  };
}

// ==================== 修改 #2 (RootLayout) ====================
type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // 4. Define params as a Promise resolving to { lang: string }
};

export default async function RootLayout({ // 5. Make the component async
  children,
  params,
}: RootLayoutProps) {
  const { lang: langString } = await params; // 6. await it
  const lang = langString as Locale; // 7. Assert it to our specific Locale type
  const baseUrl = 'https://www.juglans.ai';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Juglans',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
  };

  return (
    <html lang={lang} suppressHydrationWarning>
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