import Link from "next/link";

export function NavBar() {
  return (
    <div className="sticky top-0 w-full flex justify-between items-center max-h-16 p-4 bg-white  z-50">
      <h1 className="text-md hover:underline cursor-pointer text-black dark:text-white">hey@tanishq.com</h1>
      <div className="flex items-center gap-8 text-black dark:text-white">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </div>
  );
}
