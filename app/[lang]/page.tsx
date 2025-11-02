// app/[lang]/page.tsx
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} t={dictionary.header} />
      <main>
        <Hero t={dictionary.hero} />
        <Features t={dictionary.features} />
        <HowItWorks t={dictionary.howItWorks} />
      </main>
      {/* 👇 确保这里传递了 props */}
      <Footer t={dictionary.footer} lang={lang} />
    </>
  );
}