import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface ServicesSectionProps {
  data: {
    heading?: string;
    serviceItems?: Array<{
      icon?: any;
      title: string;
      description: string;
    }>;
    ctaButton?: {
      text: string;
      link: string;
    };
  };
}

export default function ServicesSection({ data }: ServicesSectionProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-mystic py-32">
      <div className="max-w-[1354px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-swamp text-[64px] font-inter leading-[70.4px]">
            {data.heading || "Our Main Services"}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {data.serviceItems?.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                {service.icon ? (
                  <Image
                    src={"/placeholder.svg"}
                    alt={service.title}
                    width={164}
                    height={164}
                    className="w-[164px] h-[164px]"
                  />
                ) : (
                  <div className="w-[164px] h-[164px] bg-gray-200 rounded"></div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-swamp text-[22px] font-work-sans font-medium leading-[33px] text-center mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-swamp text-[16px] font-work-sans leading-[28px] text-center mb-6">
                {service.description}
              </p>

              {/* Arrow Icon */}
              <div className="flex justify-center">
                <ArrowRight className="w-5 h-5 text-swamp" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {data.ctaButton && (
          <div className="text-center">
            <Button
              asChild
              className="bg-gradient-brand hover:bg-gradient-brand/90 text-white rounded-full px-8 py-3 text-[16px] font-bold"
            >
              <Link href={data.ctaButton.link}>{data.ctaButton.text}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
