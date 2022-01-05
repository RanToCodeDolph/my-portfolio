export default function Header({ title }) {
  return (
    <div className="flex justify-between">
      <div className="text-3xl font-PatuaOne text-zinc-300 hover:text-purple-300">
        {title}
      </div>
      <div className="flex gap-4 self-end">
        <div
          onClick={() =>
            window.open(
              "https://in.linkedin.com/in/randolph-r-pereira",
              "_blank"
            )
          }
          className="text-lg font-PatuaOne text-zinc-300 hover:text-sky-300 cursor-pointer"
        >
          linkedIn
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/randolph.pereira/", "_blank")
          }
          className="text-lg font-PatuaOne text-zinc-300 hover:text-yellow-300 cursor-pointer"
        >
          Instagram
        </div>
      </div>
    </div>
  );
}
