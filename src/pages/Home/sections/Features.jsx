import {
  VscVscodeInsiders,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscRemoteExplorer,
  VscLayoutPanel,
  VscAccount,
} from "react-icons/vsc";
import { AiOutlineCode } from "react-icons/ai";
import { FaRegCopy, FaReact, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoGitMerge } from "react-icons/go";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { BiLogoGoLang } from "react-icons/bi";
import { PiCopySimple } from "react-icons/pi";
import { IoRemoveOutline, IoWarningOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgRemote } from "react-icons/cg";
import { MdOutlineRocketLaunch, MdOutlineCancel } from "react-icons/md";
import { LuUnplug } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import { VscDatabase } from "react-icons/vsc";
import Header from "../components/vscode/Header";
import Menu from "../components/vscode/Menu";
import SearchBar from "../components/vscode/SearchBar";
import CloseWindow from "../components/vscode/CloseWindow";
import Tabs from "../components/vscode/Tabs";
import TabItems from "./TabItems";
import Aside from "../components/vscode/Aside";
import FileAndPluginIcons from "../components/vscode/FileAndPluginIcons";
import ProfileAndSettingsIcons from "../components/vscode/ProfileAndSettingsIcons";

function Features() {
  return (
    <section className="py-28 select-none">
      <div className="vs_container">
        <div className="vs_main border border-cyan-400 overflow-hidden bg-[#000] rounded-lg grid grid-cols-[55px_1fr] grid-rows-[45px_32px_500px_200px_23px]">
          {/* Top bar */}
          <Header>
            <Menu />
            <SearchBar />
            <CloseWindow />
          </Header>
          {/* Tabs */}
          <Tabs>
            <TabItems />
          </Tabs>
          <Aside>
            <FileAndPluginIcons />
            <ProfileAndSettingsIcons />
          </Aside>
          {/* Main editor */}
          <div className="bg-[#1d2433] col-start-2 col-span-3 row-start-3 row-span-1"></div>
          {/* Terminal */}
          <footer className="text-xs row-start-4 row-span-1 col-start-2 col-span-1 px-4">
            <nav className="flex justify-between items-center h-8 text-slate-400">
              <div className="flex gap-4 items-center">
                <span className="border-b border-yellow-500 cursor-pointer hover:text-white transition-all py-1">
                  TERMINAL
                </span>
                <span className="cursor-pointer hover:text-white transition-all py-1">
                  PROBLEMS
                </span>
                <span className="cursor-pointer hover:text-white transition-all py-1">
                  OUTPUT
                </span>
                <span className="cursor-pointer hover:text-white transition-all py-1">
                  DEBUG CONSOLE
                </span>
                <span className="cursor-pointer hover:text-white transition-all py-1">
                  PORTS
                </span>
                <span className="cursor-pointer hover:text-white transition-all py-1">
                  SQL CONSOLE
                </span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center">
                  <AiOutlineCode />
                  bash
                </span>
              </div>
            </nav>
          </footer>
          {/* Footer settings */}
          <div className="text-xs row-start-5 row-span-1 col-span-full px-3">
            <div className="flex justify-between items-center text-gray-600">
              <div className="flex gap-4 items-center">
                <CgRemote className="text-xl" />
                <div className="flex items-center">
                  <MdOutlineRocketLaunch className="text-sm" />
                  <LuUnplug className="mr-1 text-sm" />
                  Launchpad
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineCancel className="text-sm" />
                  0
                  <IoWarningOutline className="text-sm" />0
                  <IoIosInformationCircleOutline className="text-sm" />0
                </div>
                <div className="flex items-center gap-1">
                  <LiaBroadcastTowerSolid />0
                </div>
                <div className="flex items-center gap-1">
                  <VscDatabase />
                  Connect
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
