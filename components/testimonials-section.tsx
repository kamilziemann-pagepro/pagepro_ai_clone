import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface TestimonialsSectionProps {
  data: {
    videoThumbnail?: any;
    testimonialItems?: Array<{
      quote: string;
      author: string;
      company: string;
      backgroundColor: "red" | "light-gray";
    }>;
  };
}

export default function TestimonialsSection({
  data,
}: TestimonialsSectionProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-swamp py-32">
      <div className="max-w-[1905px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="w-[575px] h-[323px] bg-gray-800 rounded-lg overflow-hidden shadow-[0_10px_98px_rgba(207,207,207,1)]">
              {data.videoThumbnail ? (
                <Image
                  src={"/placeholder.svg"}
                  alt="Video thumbnail"
                  width={575}
                  height={323}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-700"></div>
              )}

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="w-20 h-20 bg-gradient-brand hover:bg-gradient-brand/90 rounded-full p-0">
                  <Play
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                  />
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            {data.testimonialItems?.map((testimonial, index) => (
              <div
                key={index}
                className={`p-12 ${
                  testimonial.backgroundColor === "red"
                    ? "bg-brand-red text-white"
                    : "bg-mystic text-swamp"
                }`}
              >
                <blockquote className="text-[22px] font-work-sans leading-[33px] mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-[16px] font-inter leading-[17.6px] not-italic">
                  {testimonial.author}, {testimonial.company}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
