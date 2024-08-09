import { FiSettings } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

export default function ProfileAndSettingsIcons() {
  return (
    <div className="flex flex-col gap-6 mt-auto text-2xl text-gray-500">
      <span>
        <VscAccount />
      </span>
      <span>
        <FiSettings />
      </span>
    </div>
  );
}
