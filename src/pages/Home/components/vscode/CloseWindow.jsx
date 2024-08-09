import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { IoRemoveOutline } from "react-icons/io5";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { PiCopySimple } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { VscLayoutPanel } from "react-icons/vsc";

export default function CloseWindow() {
  return (
    <div className="flex gap-5 items-center ml-auto pr-5 text-lg flex-shrink-0">
      <div className="flex gap-3 items-center">
        <span>
          <VscLayoutPanel className="rotate-90" />
        </span>
        <span>
          <VscLayoutPanel />
        </span>
        <span>
          <BsReverseLayoutSidebarReverse />
        </span>
        <span>
          <LuLayoutPanelLeft />
        </span>
      </div>
      <div className="flex gap-5 items-center">
        <span>
          <IoRemoveOutline />
        </span>
        <span>
          <PiCopySimple />
        </span>
        <span>
          <RxCross1 />
        </span>
      </div>
    </div>
  );
}
