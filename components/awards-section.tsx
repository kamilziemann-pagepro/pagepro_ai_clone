import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface AwardsSectionProps {
  data: {
    heading?: string;
    subheading?: string;
    awards?: Array<{
      name: string;
      logo?: any;
      description: string;
      year: string;
    }>;
  };
}

export default function AwardsSection({ data }: AwardsSectionProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[1354px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-swamp text-[64px] font-inter leading-[70.4px] mb-4">
            {data.heading || "Awards & Recognition"}
          </h2>
          <p className="text-swamp text-[22px] font-inter leading-[24.2px]">
            {data.subheading || "Our achievements and industry recognition"}
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.awards?.map((award, index) => (
            <div key={index} className="bg-mystic p-6 rounded-lg text-center">
              {/* Logo */}
              <div className="mb-6 flex justify-center">
                {award.logo ? (
                  <Image
                    src={
                      "/placeholder.svg?height=80&width=80&query=award badge"
                    }
                    alt={award.name}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">
                      {award.year}
                    </span>
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-swamp text-[22px] font-work-sans font-medium leading-[33px] mb-2">
                {award.name}
              </h3>

              {/* Year */}
              <p className="text-brand-red text-[16px] font-work-sans font-bold mb-4">
                {award.year}
              </p>

              {/* Description */}
              <p className="text-swamp text-[14px] font-work-sans leading-[24px]">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
