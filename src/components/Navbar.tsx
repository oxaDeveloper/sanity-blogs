"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-primary fixed w-full border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-primary text-2xl font-bold">Logo</h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <p className="text-primary rounded-md px-3 py-2 text-sm font-medium">
                    Home
                  </p>
                </Link>
                <Link href="/about">
                  <p className="hover:text-primary text-secondary-foreground hover:bg-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
                    About
                  </p>
                </Link>
                <Link href="/services">
                  <p className="hover:text-primary text-secondary-foreground hover:bg-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
                    Services
                  </p>
                </Link>
                <Link href="/contact">
                  <p className="hover:text-primary text-secondary-foreground hover:bg-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
                    Contact
                  </p>
                </Link>
              </div>
            </div>

            <div>
              <ModeToggle />
            </div>
          </div>

          <div className="-mr-2 ml-3 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="hover:text-primary hover:bg-primary-foreground inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link href="/">
            <p className="text-primary block rounded-md px-3 py-2 text-base font-medium">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="hover:text-primary text-primary-secondaryund hover:bg-primary-foreground block rounded-md px-3 py-2 text-base font-medium">
              About
            </p>
          </Link>
          <Link href="/services">
            <p className="hover:text-primary text-primary-secondaryund hover:bg-primary-foreground block rounded-md px-3 py-2 text-base font-medium">
              Services
            </p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-primary text-primary-secondaryund hover:bg-primary-foreground block rounded-md px-3 py-2 text-base font-medium">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
