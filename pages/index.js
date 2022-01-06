import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Experience from "@components/experience/Experience";
import AboutMe from "@components/aboutMe/AboutMe";
import Technology from "@components/technology/Technology";

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Patua+One&display=swap"
          rel="stylesheet"
        />
        <title>Randolph Pereira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col gap-10">
          <Header title="RP." />
          <AboutMe />
          <div className="flex flex-row items-center justify-evenly">
            <Experience />
          </div>
          <div className="flex flex-row items-center justify-evenly">
            <Technology />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
