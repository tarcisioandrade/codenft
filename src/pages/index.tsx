import Collection from "@/screens/Collection";
import Faq from "@/screens/Faq";
import Footer from "@/screens/Footer";
import Header from "@/screens/Header";
import Hero from "@/screens/Hero";
import TopRate from "@/screens/TopRate";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>CodeNFT</title>
      </Head>
      <Header />
      <Hero />
      <TopRate />
      <Collection />
      <Footer />
    </main>
  );
}
