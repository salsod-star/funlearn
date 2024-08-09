export default function Aside({ children }) {
  return (
    <aside className="flex flex-col gap-6 row-start-2 row-end-[-2] col-start-1 col-span-1 pl-3.5 py-4">
      {children}
    </aside>
  );
}
