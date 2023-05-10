"use client";
import React, { useState } from "react";
import Image from "next/image";

import { useTheme } from "next-themes";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { setTheme, theme } = useTheme();

  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex items-center space-x-6'>
          <Image src={"/steve.png"} width={50} height={50} alt='Logo' />
          <h1 className='text-3xl lg:text-4xl'>Steve Reads</h1>
        </div>
        <button
          className='text-xl lg:text-2xl'
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            setTheme(isDarkMode ? "light" : "dark");
          }}
        >
          {isDarkMode ? "🍏" : "🍎"}
        </button>
      </div>
      <p className='py-2 text-lg italic lg:text-xl'>
        A showcase of books that inspired Steve Jobs.
      </p>
    </div>
  );
};

export default Header;
