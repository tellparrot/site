import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ThemeToggle } from "./ui/theme-toggle";
import { useAuth } from '../contexts/AuthContext';

export function Header() {
  const { isAuthenticated } = useAuth();
  console.log("Header auth state:", isAuthenticated);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link></li>
            <li><Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link to="/features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link></li>
            <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link></li>
            <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}