"use client";

import { useState } from "react";
import { Menu, Moon, Sun, Sparkles } from "lucide-react";

export default function FantasyHeader() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const navItems = ["Grimoire", "Quests", "Artifacts", "Spells"];

  const toggleTheme = () => {
    setIsDark(!isDark);
    console.log(`Switched to ${!isDark ? "dark" : "light"} theme`);
  };

  const handleNavClick = (item) => {
    setActiveNav(item);
    setIsMobileMenuOpen(false);
    console.log(`Navigating to: ${item}`);
  };

  return (
    <header className="relative mb-6">
      {/* Ornate Border */}
      <div
        className="absolute inset-0 border-4 border-indigo-950/90 rounded-lg"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="20" height="20" fill="none" stroke="%234c1d95" strokeWidth="1" strokeOpacity="0.3"/></svg>\')',
          boxShadow:
            "inset 0 0 20px 5px rgba(79, 70, 229, 0.2), 0 0 15px rgba(79, 70, 229, 0.3)",
        }}
      />

      {/* Main Header Content */}
      <div
        className="relative z-10 bg-slate-900/95 rounded-lg p-4"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23020617" fillOpacity="0.05"/><path d="M0 0L100 100M100 0L0 100" stroke="%236d28d9" strokeWidth="0.5" strokeOpacity="0.15"/></svg>\')',
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Title Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-700 rounded-full opacity-50 animate-pulse"></div>
              <Sparkles className="w-6 h-6 text-purple-200 z-10" />
            </div>

            <div>
              <h1 className="text-2xl font-cinzel font-bold text-purple-200 tracking-wider">
                Mystical Realms
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"></div>
              <p className="text-xs text-slate-400 mt-0.5 font-crimson italic">
                Chronicles of the Arcane
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1 md:gap-2">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-1.5 text-sm font-crimson transition-all duration-300 relative group ${
                    activeNav === item
                      ? "text-purple-300"
                      : "text-slate-300 hover:text-purple-300"
                  }`}
                  style={{
                    textShadow:
                      activeNav === item
                        ? "0 0 10px rgba(139, 92, 246, 0.8)"
                        : "",
                  }}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${
                      activeNav === item ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-300 hover:text-purple-300 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-1.5 bg-slate-800 border border-purple-900/50 rounded-full text-slate-300 hover:text-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {isDark ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-purple-900/30">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-3 py-2 text-sm font-crimson transition-colors rounded ${
                    activeNav === item
                      ? "text-purple-300 bg-purple-900/20"
                      : "text-slate-300 hover:text-purple-300 hover:bg-purple-900/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1">
        <div className="h-full bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"></div>
      </div>

      {/* Corner Ornaments */}
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-indigo-900 rounded-full border-2 border-purple-700 flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-900 rounded-full border-2 border-purple-700 flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      </div>
    </header>
  );
}
