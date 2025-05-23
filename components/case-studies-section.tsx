import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface CaseStudiesSectionProps {
  data: {
    heading?: string;
    subheading?: string;
    caseStudies?: Array<{
      title: string;
      description: string;
      image?: any;
      tags?: string[];
      link: string;
    }>;
    ctaButton?: {
      text: string;
      link: string;
    };
  };
}

export default function CaseStudiesSection({ data }: CaseStudiesSectionProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-swamp py-32">
      <div className="max-w-[1354px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-[64px] font-inter leading-[70.4px] mb-4">
            {data.heading || "Case Studies"}
          </h2>
          <p className="text-white text-[22px] font-inter leading-[24.2px]">
            {data.subheading ||
              "See how we've helped our clients achieve their goals"}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {data.caseStudies?.map((caseStudy, index) => (
            <Link key={index} href={caseStudy.link} className="group">
              <div className="bg-tiber rounded-lg overflow-hidden transition-transform duration-300 group-hover:translate-y-[-8px]">
                {/* Image */}
                <div className="h-[240px] relative">
                  {caseStudy.image ? (
                    <Image
                      src={
                        "/placeholder.svg?height=240&width=400&query=project screenshot"
                      }
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-big-stone"></div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  {caseStudy.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-big-stone text-white text-[10px] font-work-sans px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-white text-[22px] font-work-sans font-medium leading-[33px] mb-4">
                    {caseStudy.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white text-[16px] font-work-sans leading-[28px] mb-6">
                    {caseStudy.description}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-brand-red group-hover:text-brand-red-light transition-colors">
                    <span className="text-[16px] font-work-sans mr-2">
                      Read more
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
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
