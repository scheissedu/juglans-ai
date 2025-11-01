import Header from "./components/Header";
import Hero from "./components/Hero";
// Import Features component once you create it
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Features /> */}
        {/* You can continue building other components like Features here */}
      </main>
      <Footer />
    </>
  );
}