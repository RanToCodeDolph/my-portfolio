import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Experience from "@components/experience/Experience";
import AboutMe from "@components/aboutMe/AboutMe";
import Technology from "@components/technology/Technology";
import { useEffect, useState } from "react";
import Project from "@components/project/Project";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  });

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
        {loaded ? (
          <div className="main-div animate-fade-in ">
            <div className="inner-div flex flex-col gap-20">
              <Header title="RP." />
              <AboutMe />
              <div className="flex flex-row items-center justify-center">
                <Experience />
              </div>
              <div className="flex flex-row items-center justify-evenly">
                <Technology />
              </div>
            </div>
            <div>
              <div className="flex pt-24 flex-row items-center justify-evenly"></div>
            </div>
          </div>
        ) : (
          <div className="main-div-loading">
            <div className="text-3xl p-3 font-PatuaOne bg-red-400 text-zinc-100 rounded-xl w-16 h-16">
              <div className="animate-pulse ">RP.</div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
