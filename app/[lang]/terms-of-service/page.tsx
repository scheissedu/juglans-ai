import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from 'next';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import LegalPageLayout from "@/app/components/LegalPageLayout";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.termsPage.title,
    description: `Read the terms of service for Juglans.ai before using our products.`,
  };
}

export default async function TermsOfServicePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const pageT = dictionary.termsPage;

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