import { useState } from "react";
import Logo from "../../src/assets/187110-middle.png";
import { Link } from "react-router-dom";
import { LoginForm } from "./login-form";
import { SignUpForm } from "./sign-up-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#101014] border-b border-gray-800 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <img
              src={Logo}
              alt="Gameboxd Logo"
              className="h-15 w-15 sm:h-16 sm:w-16 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain "
            />
            <a
              href="/"
              className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Gameboxd
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8  md:border-gray-700 md:pl-6 lg:pl-8 md:ml-6 lg:ml-10">
            <a
              href="/games"
              className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Games
            </a>
            <a
              href="/lists"
              className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Lists
            </a>
            {/* LOGIN pop up */}  
            <Dialog>
              <DialogTrigger className="text-white">Login</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <LoginForm />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* sign up pop up */}  
            <Dialog>
              <DialogTrigger className="bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-4  lg:py-2 rounded-md transition-colors text-sm lg:text-base whitespace-nowrap">
                Create Account
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <SignUpForm />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1a1f] border-t border-gray-800 animate-in slide-in-from-top">
          <div className="px-3 pt-2 pb-3 space-y-1 max-w-md mx-auto">
            <a
              href="/games"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              Games
            </a>
            <a
              href="/lists"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              Lists
            </a>
            <a
              href="/signin"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="block px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-center"
            >
              Create Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
