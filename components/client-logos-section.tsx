import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface ClientLogosSectionProps {
  data: {
    heading?: string;
    subheading?: string;
    logos?: Array<{
      name: string;
      logo?: any;
    }>;
  };
}

export default function ClientLogosSection({ data }: ClientLogosSectionProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1354px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-swamp text-[36px] font-inter leading-[46.8px] mb-4">
            {data.heading || "Trusted by Industry Leaders"}
          </h2>
          <p className="text-swamp text-[16px] font-work-sans leading-[28px]">
            {data.subheading ||
              "We've helped these companies build exceptional digital products"}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {data.logos?.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              {client.logo ? (
                <Image
                  src="/placeholder.svg?height=60&width=120&query=company logo"
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-h-[60px] w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <div className="w-[120px] h-[60px] bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{client.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
