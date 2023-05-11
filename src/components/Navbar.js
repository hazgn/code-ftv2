"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-[#00ffff] p-5">
      <nav className="flex justify-between items-center md:flex-none">
        <Link href="/">
          <h1 className="font-bold text-black hover:text-cyan-600">
            Test Frontend v2
          </h1>
        </Link>
        <div className="flex items-center md:inline md:absolute md:top-20 md:border-white md:border-2 md:p-5 md:-left-1 md:min-h-[210px] md:min-w-[15vw] md:rounded-tr-lg md:rounded-br-lg">
          <Link
            href="/users/create"
            className={`${"flex text-black hover:text-cyan-600 font-semibold hover:text-sm  md:h-5"} ${
              pathname === "/users/create"
                ? "md:text-purple-500"
                : "md:text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="relative pl-1 hidden md:inline">Create User</p>
          </Link>
          <Link
            href="/users"
            className={`${"flex text-black hover:text-cyan-600 font-semibold hover:text-sm ml-5 md:ml-0 md:mt-10 md:h-5"} ${
              pathname === "/users" ? "md:text-purple-500" : "md:text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
            <p className="relative pl-1 hidden md:inline">List User</p>
          </Link>
          <Link
            href="/users/delete"
            className={`${"flex text-black hover:text-cyan-600 font-semibold hover:text-sm ml-5 md:ml-0 md:mt-10 md:h-5"} ${
              pathname === "/users/delete"
                ? "md:text-purple-500"
                : "md:text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="relative  pl-1 hidden md:inline">Delete User</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
