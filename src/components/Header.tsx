import React, { useState } from 'react';
import { Sun, Moon, Code2, Home, Mail, Trophy, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold">SD's C++</span>
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </button>
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link to="/home" className="flex items-center space-x-1 hover:text-primary py-2 px-4">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/compiler" className="flex items-center space-x-1 hover:text-primary py-2 px-4">
                <Code2 className="h-5 w-5" />
                <span>Compiler</span>
              </Link>
            </li>
            <li>
              <Link to="/contests" className="flex items-center space-x-1 hover:text-primary py-2 px-4">
                <Trophy className="h-5 w-5" />
                <span>Contests</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center space-x-1 hover:text-primary py-2 px-4">
                <Mail className="h-5 w-5" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="rounded-md p-2 hover:bg-accent"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}