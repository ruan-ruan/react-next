'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">CRM获客系统</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium">首页</Link>
            <Link href="/features" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium">功能</Link>
            <Link href="/pricing" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium">价格</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium">联系我们</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/signup" className="btn btn-primary">免费试用</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium">首页</Link>
            <Link href="/features" className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium">功能</Link>
            <Link href="/pricing" className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium">价格</Link>
            <Link href="/contact" className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium">联系我们</Link>
            <Link href="/signup" className="block btn btn-primary text-center">免费试用</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;