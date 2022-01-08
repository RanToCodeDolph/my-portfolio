export default function Header({ title }) {
  return (
    <div className="header-main">
      <div className="flex gap-2">
        <div className="text-2xl p-1 font-PatuaOne bg-red-400 text-zinc-100 rounded-xl">
          {title}
        </div>
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
              className="text-zinc-500 hover:text-red-400 cursor-pointer"
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
              className="text-zinc-500 hover:text-red-400 cursor-pointer"
            >
              Instagram
            </div>
          </div>
        </div>
        <div className="text-zinc-500 hover:text-red-400 cursor-pointer text-sm">
          <a href="mailto:randolphpereira3@gmail.com">
            randolphpereira3@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
