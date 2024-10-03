"use client"; // Add this line to mark as a Client Component

import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 md:p-6 lg:px-16 flex justify-between items-center z-50">
      {/* Logo */}
      <div>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
          ✈️FlyHigh
        </h2>
      </div>

      {/* Links */}
      <nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-500 font-semibold"
          >
            ☰
          </button>
        </div>

        {/*  medium and large screens */}
        <ul className="hidden md:flex gap-6 lg:gap-8 justify-center items-center">
          <li>
            <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/about">
              Popular
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/destination">
              Destination
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/feedback">
              Feedback
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Menu items for mobile screens */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4">
            <li>
              <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/about">
                Popular
              </Link>
            </li>
            <li>
              <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/destination">
                Destination
              </Link>
            </li>
            <li>
              <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/feedback">
                Feedback
              </Link>
            </li>
            <li>
              <Link className="text-blue-500 font-semibold hover:text-blue-700" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
