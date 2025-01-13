import Link from "next/link";

export function NavBar() {
  return (
    <div className="fixed top-0 w-[50vw] flex justify-between items-center max-h-16 p-4 bg-transparent z-50">
      <h1 className="text-md hover:underline cursor-pointer text-black dark:text-white">hey@tanishq.com</h1>
      <div className="flex items-center gap-8 text-black dark:text-white">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/awards">Awards</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
