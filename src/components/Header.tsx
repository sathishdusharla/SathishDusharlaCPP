import React, { useState } from "react";
import { Sun, Moon, Code2, Home, Mail, Trophy, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold">SD's C++</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/home" className="flex items-center space-x-1 hover:text-primary">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/compiler" className="flex items-center space-x-1 hover:text-primary">
            <Code2 className="h-5 w-5" />
            <span>Compiler</span>
          </Link>
          <Link to="/contests" className="flex items-center space-x-1 hover:text-primary">
            <Trophy className="h-5 w-5" />
            <span>Contests</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1 hover:text-primary">
            <Mail className="h-5 w-5" />
            <span>Contact</span>
          </Link>
          <button onClick={toggleTheme} className="rounded-md p-2 hover:bg-accent" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden w-full bg-background shadow-lg absolute top-16 left-0 z-40 transition-all">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/home" className="flex items-center space-x-1 hover:text-primary" onClick={toggleMenu}>
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/compiler" className="flex items-center space-x-1 hover:text-primary" onClick={toggleMenu}>
                <Code2 className="h-5 w-5" />
                <span>Compiler</span>
              </Link>
            </li>
            <li>
              <Link to="/contests" className="flex items-center space-x-1 hover:text-primary" onClick={toggleMenu}>
                <Trophy className="h-5 w-5" />
                <span>Contests</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center space-x-1 hover:text-primary" onClick={toggleMenu}>
                <Mail className="h-5 w-5" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <button onClick={toggleTheme} className="rounded-md p-2 hover:bg-accent" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
