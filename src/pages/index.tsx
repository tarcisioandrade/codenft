import Collection from "@screens/Collection";
import Footer from "@screens/Footer";
import Header from "@screens/Header";
import Hero from "@screens/Hero";
import TopRate from "@screens/TopRate";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
