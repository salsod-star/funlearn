export default function Header({ children }) {
  return (
    <header className="flex items-center gap-7 text-sm font-semibold col-span-full row-start-1 row-span-1">
      {children}
    </header>
  );
}
