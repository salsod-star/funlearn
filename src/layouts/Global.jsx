import { Link, Outlet } from "react-router-dom";
import { NavMenu } from "../components";
import logo from "../assets/react.svg";

function GlobalLayout() {
  return (
    <>
      <header className="flex justify-between items-center gap-3 mb-8 h-[70px]">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <NavMenu />
      </header>
      <Outlet />
    </>
  );
}

export default GlobalLayout;
