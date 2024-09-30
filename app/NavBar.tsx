"use client";

import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const currentPath = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
    // Add more links as needed
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-2">
          <FaBug className="text-2xl" />
          <span className="text-xl font-bold">Issue Tracker</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classNames("hover:text-gray-300 transition-colors", {
                  "text-gray-400": link.href !== currentPath,
                  "text-white font-semibold": link.href === currentPath,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="flex flex-col space-y-2 p-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={classNames(
                    "block hover:text-gray-300 transition-colors",
                    {
                      "text-gray-400": link.href !== currentPath,
                      "text-white font-semibold": link.href === currentPath,
                    }
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
