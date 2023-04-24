import React, { FC, useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { popularCrypto } from "../constants";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleDarkmode = () => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  useEffect(() => {
    //setup initial theme
    if (theme === "dark") {
      const root = window.document.documentElement;
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      const root = window.document.documentElement;
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, []);
  return (
    <nav
      className="
          bg-purple-10
          min-h-[80px]
          flex flex-wrap
          items-center
          justify-between
          w-full
          md:py-0
          text-lg text-gray-700
          bg-white
          2xl:px-20
          px-10
        "
    >
      <div>
        <a href="/">
          <h1 className="text-white-5 text-3xl font-bold">CryptoCoins</h1>
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block stroke-white-10"
        fill="none"
        viewBox="0 0 24 24"
        onClick={() => setOpenMenu((currentOpenMenu) => !currentOpenMenu)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div
        className={`${
          openMenu ? "hidden" : ""
        } w-full md:flex md:items-center md:w-auto`}
        id="menu"
      >
        <ul
          className="
                    pt-4
                    text-base text-gray-700
                    md:flex
                    md:justify-between 
                    md:pt-0"
        >
          <li>
            <a
              className="md:p-4 py-2 block hover:text-purple-400 text-white-10"
              href={`/coins`}
            >
              ALL
            </a>
          </li>
          {popularCrypto.map((crypto) => (
            <li key={crypto.id}>
              <a
                className="md:p-4 py-2 block hover:text-purple-400 text-white-10"
                href={`/${crypto.id.toLowerCase()}`}
              >
                {crypto.symbol}
              </a>
            </li>
          ))}
          <li className="flex 2xl:justify-normal 2xl:items-center md:justify-normal md:items-center justify-center">
            {theme === "light" ? (
              <BsSun
                className="h-6 w-6 text-white-10 cursor-pointer inline-flex"
                onClick={() => toggleDarkmode()}
              />
            ) : (
              <BsMoon
                className="h-6 w-6 text-white-10 cursor pointer inline-flex"
                onClick={() => toggleDarkmode()}
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
