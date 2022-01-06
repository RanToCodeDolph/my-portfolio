import React from "react";

function Technology() {
  return (
    <div className="flex text-slate-50  flex-wrap gap-10 justify-center font-Montserrat">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div className="bg-javascript-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
          <div className="bg-typescript-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
        </div>
        <div>
          <p>Javascript & Typescript</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="bg-react-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
          <div className="bg-angular-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
        </div>
        <div>
          <p>Angular & React</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="bg-html-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
          <div className="bg-css-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
        </div>
        <div>
          <p>HTML & CSS</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="bg-tailwind-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
          <div className="bg-bootstrap-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
          <div className="bg-scss-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
        </div>
        <div>
          <p>Tailwind CSS, Bootstrap & Sass</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="bg-java-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
          <div className="bg-spring-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
        </div>
        <div>
          <p>Java & Spring boot</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="bg-oracle-logo  bg-contain bg-center bg-no-repeat w-8 h-8"></div>
        </div>
        <div>
          <p>Oracle DB</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div className="bg-npm-logo bg-contain bg-center bg-no-repeat w-10 h-8"></div>
          <div className="bg-yarn-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
        </div>
        <div>
          <p>npm & Yarn</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div className="bg-git-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
          <div className="bg-github-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
          <div className="bg-bitbucket-logo bg-contain bg-center bg-no-repeat w-8 h-8"></div>
        </div>
        <div>
          <p>Git, GitHub & Bitbucket</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div className="bg-qpid-logo bg-contain bg-center bg-no-repeat w-10 h-8"></div>
          <div className="bg-kafka-logo bg-contain bg-center bg-no-repeat w-6 h-8"></div>
        </div>
        <div>
          <p>Qpid & Kafka</p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
