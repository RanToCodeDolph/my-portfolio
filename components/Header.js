export default function Header({ title }) {
  return (
    <div className="header-main">
      <div className="flex gap-2">
        <div className="text-2xl p-1 font-Pacifico  text-zinc-800">{title}</div>
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
              className="text-zinc-800 hover:text-zinc-500 cursor-pointer font-Rubik"
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
              className="text-zinc-800 hover:text-zinc-500 cursor-pointer font-Rubik"
            >
              Instagram
            </div>
          </div>
        </div>
        <div className="text-zinc-800 hover:text-zinc-500 cursor-pointer text-sm font-Rubik">
          <a href="mailto:randolphpereira3@gmail.com">
            randolphpereira3@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
