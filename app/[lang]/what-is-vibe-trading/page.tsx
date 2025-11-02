// app/[lang]/what-is-vibe-trading/page.tsx
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from 'next';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import VibeHero from "@/app/components/VibeHero";
import VibeCoreConcept from "@/app/components/VibeCoreConcept";

// ==================== 修改 #1: generateMetadata ====================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>; // <-- 修改类型
}): Promise<Metadata> {
  const { lang } = await params; // <-- 使用 await 解析
  const dictionary = await getDictionary(lang);
  const title = dictionary.vibeTradingPage.hero.title;
  return {
    title: title,
  };
}

// ==================== 修改 #2: Page Component ====================
export default async function VibeTradingPage({
  params,
}: {
  params: Promise<{ lang: Locale }>; // <-- 修改类型
}) {
  const { lang } = await params; // <-- 使用 await 解析
  const dictionary = await getDictionary(lang);
  const pageT = dictionary.vibeTradingPage;

  return (
    <>
      <Header lang={lang} t={dictionary.header} /> 
      <main>
        <VibeHero t={pageT.hero} />
        <VibeCoreConcept t={pageT.coreConcept} />
      </main>
      <Footer t={dictionary.footer} lang={lang} />
    </>
  );
}