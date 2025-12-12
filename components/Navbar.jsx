'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="bg-red-700 backdrop-blur-sm h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-white font-bold text-xl">MyProfile</h1>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "bg-white text-red-700 px-3 py-1 rounded" : "text-white hover:text-gray-200"
              } transition`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${
                pathname === "/projects" ? "bg-white text-red-700 px-3 py-1 rounded" : "text-white hover:text-gray-200"
              } transition`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "bg-white text-red-700 px-3 py-1 rounded" : "text-white hover:text-gray-200"
              } transition`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
