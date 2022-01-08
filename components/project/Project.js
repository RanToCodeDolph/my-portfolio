import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col items-center font-Montserrat  justify-center gap-8 ">
      <div className=" text-3xl  text-zinc-500 text-center">
        Some things i have
        <span className="text-red-400"> built</span>.<div></div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 flex-wrap justify-center group rounded-2xl bg-red-100 shadow-lg">
          <div className="bg-cover bg-desitarils w-80 rounded-l-2xl "></div>
          <div className="flex flex-col gap-2 m-4  ">
            <div className="flex justify-between">
              <div className="flex gap-1">
                <div className="bg-cover bg-desitarils-logo w-8 h-8"></div>
                <div className="text-2xl text-zinc-600 font-PatuaOne">
                  Desitrails.
                </div>
              </div>
              <div
                onClick={() => window.open("https://desitrails.com/", "_blank")}
                className="text-zinc-700 hover:text-red-900 hover:cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
            <div className=" text-lg max-w-xl ">
              A web app for searching treks and trails in India. View trek
              difficulty levels, trek routes, nearby treks, trek location on map
              and more detailed info information about each trek. Search treks
              using a number of existing filter, making it easier to search your
              next trekking destination.
            </div>
            <div className="text-sm font-PatuaOne">
              <div className="flex gap-3 text-red-700">
                <div>Angular</div>
                <div>Tailwind CSS</div>
                <div>Firebase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
