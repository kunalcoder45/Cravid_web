"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors ",
                isScrolled ? "text-slate-900 dark:text-slate-100" : "text-slate-100 dark:text-slate-100"
              )}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://github.com/kunalcoder45/Cravid/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white px-4 py-2 rounded-lg text-sm transition duration-300 ease-in-out"
          >
            Git Repo
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn(
              "h-6 w-6",
              isScrolled ? "text-slate-900 dark:text-slate-100" : "text-slate-100 dark:text-slate-100"
            )} />
          ) : (
            <Menu className={cn(
              "h-6 w-6",
              isScrolled ? "text-slate-900 dark:text-slate-100" : "text-slate-100 dark:text-slate-100"
            )} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 pt-0 pb-6 bg-white dark:bg-slate-900 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium py-2 text-slate-900 dark:text-slate-100 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}