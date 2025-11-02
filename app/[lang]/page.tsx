// app/[lang]/page.tsx
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

// ==================== 修改开始 ====================
export default async function Home({
  params, // 1. 接收整个 params Promise
}: {
  params: Promise<{ lang: Locale }>; // 2. 将 params 的类型定义为 Promise
}) {
  const { lang } = await params; // 3. 在函数内部 await 解析出 lang
  const dictionary = await getDictionary(lang);
// ==================== 修改结束 ====================

  return (
    <>
      {/* 4. 后续代码无需更改，因为 lang 已经被正确解析 */}
      <Header lang={lang} t={dictionary.header} />
      <main>
        <Hero t={dictionary.hero} />
        <Features t={dictionary.features} />
        <HowItWorks t={dictionary.howItWorks} />
      </main>
      <Footer t={dictionary.footer} lang={lang} />
    </>
  );
}