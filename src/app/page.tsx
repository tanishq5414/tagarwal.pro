import Image from "next/image";
import getBlogMetaData from "@/utils/getBlogMetaData";
import Link from "next/link";

const projects = [
  {
    name: "Companion - Digital Sharing Platform",
    url: "https://github.com/tanishq5414/companion",
    users: "1954",
  }
];
const experiences = [
    {
      url: `${process.env.NEXT_PUBLIC_LINKEDIN_URL}/details/experience`,
      text: "Discover my experiences on LinkedIn"
    },
    {
      url: process.env.NEXT_PUBLIC_TWITTER_URL,
      text: "Slide into my DMs on 𝕏 (Twitter)"
    }
  ];
export default function Home() {
  const posts = getBlogMetaData('blogs');
  const recentPosts = posts.slice(0, 3); // Get only the 3 most recent posts


  const sideProjects = projects.map((project) => (
    <li key={project.url}>
      <div className="flex items-center justify-between">
        <a 
          href={project.url}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
        >
          {project.name}
        </a>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
          <span className="text-sm text-gray-500 ml-2">
            Registered Users: {project.users}
          </span>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="flex flex-col items-start h-full w-full justify-start">
        <div className="flex sm:flex-row flex-col gap-5 sm:items-center">
          <div className="text-5xl font-medium text-black">Hi I'm</div>
          <div className="w-40 h-40 rounded-md align-middle">
            <Image
              src={"/images/tanishq-agarwal.webp"}
              alt={"tanishq agarwal photo"}
              height={40}
              width={40}
              unoptimized={true}
              className="rounded-full p-2 w-40 shadow-lg border-2 border-gray-400 bg-white"
            />
          </div>
          <div className="text-5xl font-medium text-black">Tanishq Agarwal!</div>
        </div>
        <div className="text-5xl font-medium text-gray-300 pt-6">I'm a <span className="text-black">Software Developer</span> from</div>
        <div className="text-5xl font-medium text-orange-500 pt-4">India.</div>
      <div>
        <ul className="list-disc list-inside space-y-2 pt-12 text-black">
          {experiences.map((exp) => (
            <li key={exp.url}>
              <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-gray-900 transition-colors">
                {exp.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-12 w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-black">Blogs</h2>
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            View all →
          </Link>
        </div>
        <ul className="mt-4 space-y-2">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-12 w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-black">Side Projects</h2>
        </div>
        <ul className="mt-4 space-y-4">
          {sideProjects}
        </ul>
      </div>
    </div>
  );
}
