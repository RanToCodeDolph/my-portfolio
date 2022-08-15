import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col items-center font-Montserrat  justify-center gap-8 ">
      <div className=" text-3xl  text-zinc-900 text-center">
        Some things i have
        <span> built</span>.<div></div>
      </div>
      <div className="project-col">
        <div className="col-span-2 flex gap-4 flex-wrap justify-center group rounded-2xl ">
          <div className="flex flex-col gap-2 m-4  ">
            <div className="flex justify-between">
              <div className="flex gap-1">
                <div className="bg-cover bg-desitarils-logo w-8 h-8"></div>
                <div className="text-2xl text-zinc-600 font-Pacifico">
                  Desitrails.
                </div>
              </div>
              <div
                onClick={() => window.open("https://desitrails.com/", "_blank")}
                className="text-zinc-700 hover:text-zinc-500 hover:cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
            <div className=" text-lg max-w-xl font-Rubik ">
              A web app for searching treks and trails in India. View trek
              difficulty levels, trek routes, nearby treks, trek locations on
              map and more detailed information about each trek. Search treks
              using a number of existing filter, making it easier to search your
              next trekking destination.
            </div>
            <div className="text-sm font-Rubik">
              <div className="flex gap-3 text-zinc-700">
                <div>Angular</div>
                <div>Tailwind CSS</div>
                <div>Firebase</div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-col flex gap-4 flex-wrap justify-center group rounded-2xl ">
          <div className="flex flex-col gap-2 m-4  ">
            <div className="flex justify-between">
              <div className="flex gap-1">
                <div className="text-2xl text-zinc-600 font-Pacifico">
                  Randolph Pereira
                </div>
              </div>
            </div>
            <div className=" text-lg max-w-xl font-Rubik ">
              A single page web app with a simple yet eligant design to showcase
              my skills and experience.
            </div>
            <div className="text-sm font-Rubik">
              <div className="flex gap-3 text-zinc-700">
                <div>Next.js</div>
                <div>Tailwind CSS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
