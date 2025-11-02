import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from 'next';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import LegalPageLayout from "@/app/components/LegalPageLayout";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.privacyPage.title,
    // Optional: Add a description for better SEO
    description: `Read the privacy policy for Juglans.ai. Understand how we collect, use, and protect your data.`,
  };
}

export default async function PrivacyPolicyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const pageT = dictionary.privacyPage;

  return (
    <>
      <Header lang={lang} t={dictionary.header} />
      <main>
        <LegalPageLayout 
          title={pageT.title}
          lastUpdated={pageT.lastUpdated}
          content={pageT.content}
        />
      </main>
      <Footer t={dictionary.footer} lang={lang} />
    </>
  );
}