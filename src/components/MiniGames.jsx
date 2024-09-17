import { LuArrowUpRight } from "react-icons/lu";

export default function MiniGames({ title, url, description }) {
  return (
    <div>
      <a href={url} target="blank_" className="font-bold text-animation w-fit flex mb-1">
        {title}
        <span className="text-xs">
          <LuArrowUpRight />
        </span>
      </a>
      <p className="font-thin text-sm">{description}</p>
    </div>
  );
}
