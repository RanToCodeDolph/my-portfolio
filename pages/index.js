import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Randolph Pereira!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Randolph Pereira!" />
        <p className="description">
          <code>Full-Stack Software Developer </code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
