import { TracingBeam } from "@/components/tracing-beam";
import Image from "next/image";
import Link from "next/link";

const dummyContent = [
    {
        "title": "Winning Google Hack4Change",
        "year": "Aug 2023",
        "content": [
            {
                "image": "/images/hack_4_change.jpeg",
                "alt": "Team photo at Google Hack4Change winning moment",
                "url": "https://developers.google.com/community/gdsc-solution-challenge"
            },
            {
                "image": "/images/hack_4_change_cert.png",
                "alt": "Google Hack4Change winner certificate",
                "url": "https://developers.google.com/community/gdsc-solution-challenge"
            }
        ]
    },
    {
        "title": "Visiting Singapore as Hackcelerator Finalist in Singapore Fintech Festival",
        "year": "Nov 2024",
        "content": [
            {
                "image": "/images/sff.jpeg",
                "alt": "Singapore Fintech Festival presentation",
                "url": "https://www.fintechfestival.sg/"
            },
            {
                "image": "/images/sff-park.jpeg",
                "alt": "Team at Singapore Fintech Festival",
                "url": "https://www.fintechfestival.sg/"
            },
            {
                "image": "/images/laupausat.jpg",
                "alt": "Team at Singapore Fintech Festival",
                "url": "https://www.fintechfestival.sg/"
            }
        ]
    },
    {
        "title": "Finalists in Dark Pattern Buster Hackathon by IIT BHU and Ministry of Consumer Affairs",
        "year": "Feb 2024",
        "content": [
            {
                "image": "/images/dark_pattern_buster_hackathon.png",
                "alt": "Dark Pattern Buster Hackathon finalist certificate",
                "url": "https://darkpatternbuster.in/"
            },
            {
                "image": "/images/dpbh-proposal.jpg",
                "alt": "Dark Pattern Buster Hackathon finalist certificate",
                "url": "https://darkpatternbuster.in/"
            },
            {
                "image": "/images/dpbh.jpg",
                "alt": "Dark Pattern Buster Hackathon finalist certificate",
                "url": "https://darkpatternbuster.in/"
            }
        ]
    }
];

export default function Gallery() {
    return (
        <div>
            <div className="text-4xl text-orange-500 pb-5 font-bold">
                Gallery
            </div>
            <TracingBeam className="px-6">
                {dummyContent.map((item, index) => (
                    <div key={`award-${index}`} className="flex-col items-start justify-start pb-12">
                        <div className="text-2xl text-gray-700">{item.title}</div>
                        <div className="text-lg text-gray-500">{item.year}</div>
                        <div className="flex gap-8 overflow-auto scroll-smooth no-scrollbar">
                            {item.content.map((content, imgIndex) => (
                                <Link
                                    key={`${item.title}-image-${imgIndex}`}
                                    href={content.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={content.image}
                                        alt={content.alt}
                                        width={300}
                                        height={200}
                                        className="object-contain transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg cursor-pointer"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </TracingBeam>
        </div>
    )
}