"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex space-x-6 items-center">
          <Image src={"/steve.png"} width={50} height={50} alt="Logo" />
          <h1 className="text-4xl">Steve Reads</h1>
        </div>
        <button className="text-2xl" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "🍎" : "🍏"}
        </button>
      </div>
      <p className="text-xl py-2">
        A showcase of books that inspired Steve Jobs.
      </p>
    </div>
  );
};

export default Header;
