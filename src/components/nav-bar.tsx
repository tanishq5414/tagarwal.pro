'use client'
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { use, useState } from "react";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full flex flex-col bg-white z-50">
      <div className="flex justify-between items-center max-h-16 p-4">
        <h1 className="text-md hover:underline cursor-pointer text-black dark:text-white">
          hey@tvnishq.com
        </h1>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-black dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 text-black dark:text-white">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/gallery">Gallery</Link>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <Link href="https://github.com/tanishq5414" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/tanishqagarwal" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://twitter.com/tvnishq" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5 hover:text-gray-400 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-white dark:bg-black">
          <div className="flex flex-col items-center gap-4 text-black dark:text-white">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <Link href="https://github.com/tanishq5414" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/tanishqagarwal" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://twitter.com/tvnishq" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5 hover:text-gray-400 transition-colors" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
