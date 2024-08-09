import { BiLogoGoLang } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

export default function TabItems() {
  return (
    <>
      <span className="flex gap-2 items-center px-2 py-1 cursor-pointer border-b border-yellow-500 text-[#d7dce2] bg-[#0e1013]">
        <FaReact className="text-sm text-sky-600" />
        App.jsx
        <LiaTimesSolid className="text-sm" />
      </span>
      <span className="flex gap-1 items-center px-2 py-1 hover:border-yellow-500 hover:bg-[#2f3b54] transition-all cursor-pointer border-b border-transparent text-[#8695b7]">
        <IoLogoHtml5 className="text-sm text-orange-600" />
        index.html
        <LiaTimesSolid className="text-sm" />
      </span>
      <span className="flex gap-1 items-center px-2 py-1 hover:border-yellow-500 hover:bg-[#2f3b54] transition-all cursor-pointer border-b border-transparent text-[#8695b7]">
        <BiLogoGoLang className="text-2xl text-sky-600" />
        main.go
        <LiaTimesSolid className="text-sm" />
      </span>
      <span className="flex gap-1 items-center px-2 py-1 hover:border-yellow-500 hover:bg-[#2f3b54] transition-all cursor-pointer border-b border-transparent text-[#8695b7]">
        <IoLogoJavascript className="text-sm text-yellow-600" />
        server.js
        <LiaTimesSolid className="text-sm" />
      </span>
    </>
  );
}
