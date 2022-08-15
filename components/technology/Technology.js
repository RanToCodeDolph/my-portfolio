import React from "react";
import Moment from "react-moment";

function Technology() {
  return (
    <div className="flex text-zinc-900  flex-wrap gap-10 justify-center font-Montserrat  p-4 rounded-xl">
      <div className="flex flex-col">
        <div className="flex gap-2 justify-center">
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-javascript-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-typescript-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
        </div>
        <div className="text-lg font-Rubik">
          <p>Javascript & Typescript</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-angular-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-react-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
        </div>
        <div className="text-lg font-Rubik">
          <p>Angular & React</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="flex gap-2 justify-center">
            <span className="relative inline-block">
              <div className="flex justify-center ">
                <div className="bg-html-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
              </div>
            </span>
            <span className="relative inline-block">
              <div className="flex justify-center ">
                <div className="bg-css-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
              </div>
            </span>
          </div>
        </div>
        <div className="text-lg font-Rubik">
          <p>HTML & CSS</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="flex gap-2 justify-center">
            <span className="relative inline-block">
              <div className="flex justify-center ">
                <div className="bg-tailwind-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
              </div>
            </span>
            <span className="relative inline-block">
              <div className="flex justify-center ">
                <div className="bg-bootstrap-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
              </div>
            </span>
            <span className="relative inline-block">
              <div className="flex justify-center ">
                <div className="bg-scss-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
              </div>
            </span>
          </div>
        </div>
        <div className="text-lg font-Rubik">
          <p>Tailwind CSS, Bootstrap & Sass</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-java-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-spring-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
        </div>
        <div className="text-lg font-Rubik">
          <p>Java & Spring boot</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-oracle-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
        </div>
        <div className="text-lg font-Rubik">
          <p>Oracle DB</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-2">
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-npm-logo bg-contain bg-center bg-no-repeat w-10 h-8"></div>
            </div>
          </span>
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-yarn-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
        </div>
        <div className="text-lg font-Rubik">
          <p>npm & Yarn</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-2">
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-git-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-github-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-bitbucket-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
            </div>
          </span>
        </div>
        <div className="text-lg font-Rubik">
          <p>Git, GitHub & Bitbucket</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-2">
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-qpid-logo bg-contain bg-center bg-no-repeat w-10 h-8"></div>
            </div>
          </span>
          <span className="relative inline-block">
            <div className="flex justify-center ">
              <div className="bg-kafka-logo bg-contain bg-center bg-no-repeat w-6 h-8"></div>
            </div>
          </span>
        </div>
        <div className="text-lg font-Rubik">
          <p>Qpid & Kafka</p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
