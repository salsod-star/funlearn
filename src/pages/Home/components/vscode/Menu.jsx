import { VscVscodeInsiders } from "react-icons/vsc";

export default function Menu() {
  return (
    <nav className="flex items-center gap-4 text-gray-300 px-3">
      <VscVscodeInsiders className="text-sky-700 text-xl" />
      <span>File</span>
      <span>Edit</span>
      <span>Selection</span>
      <span>View</span>
      <span>Go</span>
      <span>Run</span>
      <span>...</span>
    </nav>
  );
}
