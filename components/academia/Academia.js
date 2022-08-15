import React from "react";

const Academia = () => {
  return (
    <div className="flex flex-col items-center font-Montserrat  justify-center gap-8 ">
      <div className=" text-3xl  text-zinc-900 text-center">
        Publications.<div></div>
      </div>
      <div className="project-col">
        <div className="col-span-12 flex gap-4 flex-wrap justify-center group rounded-2xl ">
          <div className="flex flex-col gap-2 m-4  ">
            <div className="flex justify-between">
              <div className="text-2xl text-zinc-600 font-Pacifico">
                IEEE Xplore
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://ieeexplore.ieee.org/document/7095915",
                    "_blank"
                  )
                }
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
              Open source hardware based automated gardening system using
              low-cost soil moisture sensor , published in 2015 International
              Conference on Technologies for Sustainable Development (ICTSD)
            </div>
            <div className="text-sm font-Rubik">
              <div className="flex flex-col gap-1 text-zinc-700">
                <div>ISBN: 978-1-4799-8187-8</div>
                <div>DOI: 10.1109/ICTSD.2015.7095915</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academia;
