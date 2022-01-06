export default function Header({ title }) {
  return (
    <div className="header-main">
      <div className="text-2xl p-1 font-PatuaOne bg-zinc-300 text-zinc-800 rounded-xl  hover:bg-yellow-300">
        {title}
      </div>
      <div className="header-social">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div
              onClick={() =>
                window.open(
                  "https://in.linkedin.com/in/randolph-r-pereira",
                  "_blank"
                )
              }
              className="text-zinc-300 hover:text-sky-300 cursor-pointer"
            >
              LinkedIn
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.instagram.com/randolph.pereira/",
                  "_blank"
                )
              }
              className="text-zinc-300 hover:text-pink-300 cursor-pointer"
            >
              Instagram
            </div>
          </div>
        </div>
        <div className="text-zinc-300 hover:text-green-300 cursor-pointer text-sm">
          <a href="mailto:randolphpereira3@gmail.com">
            randolphpereira3@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
