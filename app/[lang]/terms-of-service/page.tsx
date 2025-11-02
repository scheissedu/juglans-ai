import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from 'next';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import LegalPageLayout from "@/app/components/LegalPageLayout";

// ==================== 修改 #1: generateMetadata ====================
export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params; // <-- 使用 await 解析
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.termsPage.title,
    description: `Read the terms of service for Juglans.ai before using our products.`,
  };
}

// ==================== 修改 #2: Page Component ====================
export default async function TermsOfServicePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params; // <-- 使用 await 解析
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