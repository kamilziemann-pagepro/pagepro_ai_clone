import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface ProcessSectionProps {
  data: {
    heading?: string;
    subheading?: string;
    steps?: Array<{
      number: number;
      title: string;
      description: string;
      icon?: any;
    }>;
  };
}

export default function ProcessSection({ data }: ProcessSectionProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-mystic py-32">
      <div className="max-w-[1354px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-swamp text-[64px] font-inter leading-[70.4px] mb-4">
            {data.heading || "Our Process"}
          </h2>
          <p className="text-swamp text-[22px] font-inter leading-[24.2px]">
            {data.subheading || "How we deliver exceptional results"}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-[2px] bg-brand-red transform md:translate-x-[-1px]"></div>

          {/* Steps */}
          <div className="space-y-16">
            {data.steps?.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16 relative`}
              >
                {/* Step Number */}
                <div className="w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center text-[24px] font-bold z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 bg-white p-8 rounded-lg shadow-md ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    {index % 2 !== 0 && <div className="flex-1"></div>}
                    {step.icon && (
                      <Image
                        src={"/placeholder.svg?height=48&width=48"}
                        alt={step.title}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                    )}
                    <h3
                      className={`text-swamp text-[22px] font-work-sans font-medium leading-[33px] ${
                        index % 2 === 0 ? "ml-4" : "mr-4"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {index % 2 === 0 && <div className="flex-1"></div>}
                  </div>
                  <p className="text-swamp text-[16px] font-work-sans leading-[28px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
