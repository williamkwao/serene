'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Services' },
   
    { href: '#contact', label: 'Contact Us', isButton: true }
  ];

  const Logo = () => (
    <Link href="/" className="flex items-center gap-3 group">
      <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#7BA7A5"/>
        <path 
          d="M20 10 C20 8, 16 7, 13 8 C10 9, 9 12, 11 14 C13 16, 19 17, 21 19 C23 21, 22 24, 19 25 C16 26, 12 25, 12 23"
          stroke="#FFF5F0" 
          fill="none" 
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path 
          d="M19 6 C21 6, 23 6, 23 8 C23 10, 21 10, 21 11 C21 12, 23 12, 25 12"
          stroke="#2B4B4A" 
          fill="none" 
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-2xl font-bold text-[#40A99B] group-hover:text-[#368F83] transition-colors">
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
          bg-gradient-to-b from-[#FFE8E0] to-white shadow-xl
          transition-transform duration-300 ease-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-8 flex flex-col space-y-6">
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
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFE8E0]">
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-[88px] flex items-center justify-between">
          <Logo />
         
          {/* Mobile menu button */}
        
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors text-[#40A99B] hover:text-[#368F83]"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              console.log(mobileMenuOpen)
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
                    ? 'bg-[#40A99B] text-white px-6 py-3 rounded-lg hover:bg-[#368F83] transition-all duration-300'
                    : 'text-gray-600 hover:text-gray-900'
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