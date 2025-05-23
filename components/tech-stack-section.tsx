import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface TechStackSectionProps {
  data: {
    heading?: string;
    technologies?: Array<{
      name: string;
      icon?: any;
    }>;
  };
}

export default function TechStackSection({ data }: TechStackSectionProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-swamp py-32">
      <div className="max-w-[1136px] mx-auto px-4 md:px-8 text-center">
        {/* Header */}
        <h2 className="text-white text-[36px] font-inter leading-[46.8px] mb-16">
          {data.heading ||
            "Use the Full Potential of the Modern Tech Stack\nFor Your Web or Mobile App"}
        </h2>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {data.technologies?.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-6">
                {tech.icon ? (
                  <Image
                    src={"/placeholder.svg"}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                ) : (
                  <div className="w-12 h-12 bg-white rounded"></div>
                )}
              </div>

              {/* Name */}
              <span className="text-white text-[14px] font-work-sans leading-[15.4px]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
