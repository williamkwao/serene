'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { href: isHomePage ? "/#services" : "/#services", label: "Services" },
    { href: isHomePage ? "/#weight-loss" : "/#weight-loss", label: "Weight Loss" },
    { href: "/consultation", label: "Contact Us", isButton: true }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#BDB8E3]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/s-logo-lavender.svg"
            alt="Serene Sequel"
            width={40}
            height={40}
          />
          <span className="text-xl font-medium text-[#4A4773]">
            SERENE SEQUEL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.isButton 
                ? "bg-[#7D7ABC] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#4A4773] transition-all duration-300"
                : "text-[#4A4773] hover:text-[#7D7ABC] transition-colors"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#4A4773] hover:text-[#7D7ABC] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          fixed inset-0 min-h-screen bg-[#F0F0F5] z-40 md:hidden transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="h-24 px-6 flex items-center justify-between border-b border-[#BDB8E3]/20 bg-white">
          <Link 
            href="/" 
            className="flex items-center space-x-3"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/s-logo-lavender.svg"
              alt="Serene Sequel"
              width={32}
              height={32}
            />
            <span className="text-lg font-medium text-[#4A4773]">
              SERENE SEQUEL
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#4A4773] hover:text-[#7D7ABC] transition-colors p-2 hover:bg-[#F0F0F5] rounded-lg"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100vh-6rem)] px-6 py-8">
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={item.isButton 
                  ? "bg-[#7D7ABC] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#4A4773] text-center transition-all duration-300"
                  : "text-[#4A4773] hover:text-[#7D7ABC] transition-colors text-lg font-medium"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 