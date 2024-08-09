import { FaRegCopy } from "react-icons/fa";
import { GoGitMerge } from "react-icons/go";
import {
  VscDebugAlt,
  VscExtensions,
  VscRemoteExplorer,
  VscSearch,
  VscSourceControl,
} from "react-icons/vsc";

export default function FileAndPluginIcons() {
  return (
    <div className="flex flex-col gap-6 text-xl text-gray-500">
      <span>
        <FaRegCopy className="cursor-pointer hover:text-gray-300" />
      </span>
      <span>
        <VscSearch className="cursor-pointer hover:text-gray-300" />
      </span>
      <span>
        <VscSourceControl className="cursor-pointer hover:text-gray-300" />
      </span>
      <span>
        <VscDebugAlt className="cursor-pointer hover:text-gray-300" />
      </span>
      <span>
        <VscExtensions className="cursor-pointer hover:text-gray-300" />
      </span>
      <span>
        <VscRemoteExplorer className="cursor-pointer hover:text-gray-300" />
      </span>
      <span>
        <span className="rounded-full w-6 h-6 border cursor-pointer border-gray-500 hover:border-gray-300 flex items-center justify-center">
          <GoGitMerge className="text-base text-gray-500  hover:text-gray-300" />
        </span>
      </span>
    </div>
  );
}
