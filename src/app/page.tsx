import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start h-full w-full justify-start">
      <div className="flex flex-row gap-5 items-center">
        <div className="text-5xl font-medium text-black">Hi I'm</div>
        <div className="w-40 h-40 rounded-md">
          <Image
            src={"/images/tanishq-agarwal.webp"}
            alt={"tanishq agarwal photo"}
            height={40}
            width={40}
            unoptimized={true}
            className="rounded-full p-2 w-40 shadow-lg h-40 border-2 border-grey-400 bg-white"
          />
        </div>
        <div className="text-5xl font-medium text-black">Tanishq Agarwal!</div>
      </div>
      <div className="text-5xl font-medium text-grey-30 pt-6">I'm a <span className="text-black">Software Developer</span> from</div>
      <div className="text-5xl font-medium text-grey-30 text-orange-500 pt-4">India.</div>
      <div>
        <ul className="list-disc list-inside space-y-2 pt-12 text-black">
          <li>
            <a href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}/details/experience`} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-gray-900 transition-colors">
              Discover my experiences on <span className="underline cursor-pointer">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href={process.env.NEXT_PUBLIC_RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-gray-900 transition-colors">
              Slide into my DMs on <span className="underline cursor-pointer">𝕏 (Twitter).</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
