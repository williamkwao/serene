'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#weight-loss', label: 'Weight Loss' },
    { href: '#contact', label: 'Contact Us', isButton: true }
  ];

  const Logo = () => (
    <Link href="/" className="flex items-center gap-3 group">
      <Image 
        src="/s-logo-lavender.svg"
        alt="Serene Sequel Logo"
        width={32}
        height={32}
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-2xl font-light tracking-wider text-[#4A4773] group-hover:text-[#7D7ABC] transition-colors">
        SERENE SEQUEL
      </span>
    </Link>
  );

  const MobileMenu = () => (
    <div 
      className={`
        fixed inset-0 z-50 lg:hidden
        transition-all duration-300
        ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}
      `}
    >
      {/* Backdrop */}
      <div 
        className={`
          absolute inset-0 bg-black/30
          transition-all duration-300
          ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}
        `}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Menu content */}
      <div 
        className={`
          absolute right-0 top-[88px] w-[300px] h-[calc(100vh-88px)]
          bg-gradient-to-br from-[#FFE8E0] via-white to-[#FFE8E0]
          shadow-xl
          transition-transform duration-300 ease-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          overflow-hidden
          before:content-['']
          before:absolute
          before:inset-0
          before:bg-[radial-gradient(circle_at_center,#40A99B08_0,transparent_25%)]
          before:bg-[length:24px_24px]
          after:content-['']
          after:absolute
          after:inset-0
          after:bg-gradient-to-b
          after:from-white/50
          after:to-transparent
          after:backdrop-blur-[2px]
        `}
      >
        <div className="p-8 flex flex-col space-y-6 relative z-10">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                transitionDelay: mobileMenuOpen ? `${150 + index * 75}ms` : '0ms'
              }}
              className={`
                block text-lg font-medium
                transition-all duration-300
                transform
                ${mobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
                }
                ${item.isButton 
                  ? 'bg-[#40A99B] text-white px-8 py-4 rounded-xl hover:bg-[#368F83] shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                  : 'text-gray-600 hover:text-gray-900 hover:translate-x-2'
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F0F0F5]">
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-[88px] flex items-center justify-between">
          <Logo />
         
          {/* Mobile menu button */}
        
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-[#BDB8E3]/20 transition-colors text-[#7D7ABC] hover:text-[#4A4773]"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
            }}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  ${item.isButton 
                    ? 'bg-[#7D7ABC] text-white px-6 py-3 rounded-lg hover:bg-[#4A4773] transition-all duration-300'
                    : 'text-gray-600 hover:text-[#4A4773]'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <MobileMenu />
    </>
  );
} 