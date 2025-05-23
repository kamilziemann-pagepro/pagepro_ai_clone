import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface BenefitsSectionProps {
  data: {
    heading?: string;
    subheading?: string;
    items?: Array<{
      icon?: any;
      title: string;
      description: string;
    }>;
  };
}

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[1354px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-brand-red text-[64px] font-inter leading-[70.4px] mb-4">
            {data.heading || "Use the benefits"}
          </h2>
          <p className="text-swamp text-[22px] font-inter leading-[24.2px]">
            {data.subheading ||
              "of narrow-specialized agency dedicated to Next.js, Expo and Sanity"}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items?.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Icon */}
              <div className="mb-6">
                {item.icon ? (
                  <Image
                    src={"/placeholder.svg"}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                ) : (
                  <div className="w-12 h-12 bg-swamp rounded"></div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-swamp text-[16px] font-inter font-bold leading-[28px] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-swamp text-[16px] font-work-sans leading-[28px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
