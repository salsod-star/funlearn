import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";

export default function SearchBar() {
  return (
    <div className="w-2/5 flex items-center gap-3">
      <span className="flex items-center gap-3">
        <FaArrowLeft className="text-gray-600" />
        <FaArrowRight className="text-gray-600" />
      </span>
      <span className="hover:border-gray-400 transition-all flex w-full gap-2 justify-center items-center text-xs py-1 border border-gray-600 rounded-lg text-gray-300 bg-[#1d2433]">
        <VscSearch className="text-base text-gray-500" />
        funlearn
      </span>
    </div>
  );
}
