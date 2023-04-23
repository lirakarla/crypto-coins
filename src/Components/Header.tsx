import React, { FC, useState } from 'react';
import { popularCrypto } from '../constants';
interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
  const [openMenu, setOpenMenu]= useState(false);
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
        "
      >
       <div>
          <a href="/">
          <h1 className='text-white-5 text-3xl font-bold'>CryptoCoins</h1>
          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block stroke-white-10"
            fill="none"
            viewBox="0 0 24 24"
            onClick={()=>setOpenMenu( (currentOpenMenu)=>!currentOpenMenu)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className={`${openMenu ? "hidden" : ""} w-full md:flex md:items-center md:w-auto`} id="menu">
                <ul
                    className="
                    pt-4
                    text-base text-gray-700
                    md:flex
                    md:justify-between 
                    md:pt-0"
                >
                    <li>
                        <a className="md:p-4 py-2 block hover:text-purple-400 text-white-10" href={`/coins`}>ALL</a>
                    </li>
                    {
                    popularCrypto.map((crypto)=>
                        <li key={crypto.id}>
                            <a className="md:p-4 py-2 block hover:text-purple-400 text-white-10" href={`/${crypto.id}`}>{crypto.symbol}</a>
                        </li>
                    )
                    }
                </ul>
        </div>
    </nav>
  );
};

export default Header;