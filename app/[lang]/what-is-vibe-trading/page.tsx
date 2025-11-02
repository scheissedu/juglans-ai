// app/[lang]/what-is-vibe-trading/page.tsx
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from 'next';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import VibeHero from "@/app/components/VibeHero";
import VibeCoreConcept from "@/app/components/VibeCoreConcept";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);
  const title = dictionary.vibeTradingPage.hero.title;
  return {
    title: title,
  };
}

export default async function VibeTradingPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const pageT = dictionary.vibeTradingPage;

  return (
    <>
      <Header lang={lang} t={dictionary.header} /> 
      <main>
        <VibeHero t={pageT.hero} />
        <VibeCoreConcept t={pageT.coreConcept} />
      </main>
      {/* 👇 确保这里传递了 props */}
      <Footer t={dictionary.footer} lang={lang} />
    </>
  );
}