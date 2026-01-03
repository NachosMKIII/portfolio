import React from "react";
import "../animations.css";
import i18n from "i18next";

const LanguageSwitcher = () => {
  return (
    <div className="flex left-[1300px] text-4xl fixed gap-6">
      <button
        className="cursor-pointer bg-black px-2 py-2 pl-5 rounded"
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
      <button
        className="cursor-pointer bg-black px-2 py-2 pl-5 rounded"
        onClick={() => i18n.changeLanguage("pt")}
      >
        PT
      </button>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex">
      <div className="p-3 w-170 z-10 -mb-4 text-neutral-200 text-9xl flex items-center justify-center tracking-widest">
        <header className="developer-name">Ricardo Morais Lucas</header>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
