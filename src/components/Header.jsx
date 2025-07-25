import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/iceberg.png";

export const Header = () => {
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      // Toggle visibility of the mobile menu
      mobileMenuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <header className="bg-header w-svw tablet:sticky  top-0 z-50">
      <nav className="flex items-center wide:w-2/3 wide:m-auto justify-between">
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="h-10 ml-8 m-3" />
          <h1 className="font-poppins m-3 desktop:text-center hidden tablet:block">
            Frozen Tools
          </h1>
        </NavLink>

        <div
          className="laptop:hidden cursor-pointer px-8 flex"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#663399"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="hidden laptop:flex justify-evenly">
          <div className=" hidden tablet:flex w-full mx-8 justify-evenly font-headerFont items-center px-4 py-2 gap-4">
            <NavLink to="/spellbook" onClick={toggleMobileMenu}>
              <p className="hover:text-burger-links">Spellbook</p>
            </NavLink>

            <NavLink to="/soldiers" onClick={toggleMobileMenu}>
              <p className="hover:text-burger-links">Soldiers</p>
            </NavLink>
          </div>
        </div>
      </nav>

      <nav
        id="mobilemenu"
        ref={mobileMenuRef}
        className="flex bg-header absolute right-0 w-2/3 flex-col pt-4 rounded-b-2xl border-b-2 border-l-2 pb-6 gap-2 items-center tablet:flex-row justify-evenly font-headerFont hidden laptop:hidden"
      >
        <NavLink to="/spellbook" onClick={toggleMobileMenu}>
          <p className="hover:text-burger-links">Spellbook</p>
        </NavLink>

        <NavLink to="/soldiers" onClick={toggleMobileMenu}>
          <p className="hover:text-burger-links">Soldiers</p>
        </NavLink>
      </nav>
    </header>
  );
};
