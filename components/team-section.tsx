import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface TeamSectionProps {
  data: {
    heading?: string;
    subheading?: string;
    teamMembers?: Array<{
      name: string;
      position: string;
      photo?: any;
      bio?: string;
      socialLinks?: {
        linkedin?: string;
        twitter?: string;
      };
    }>;
  };
}

export default function TeamSection({ data }: TeamSectionProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[1354px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-swamp text-[64px] font-inter leading-[70.4px] mb-4">
            {data.heading || "Our Team"}
          </h2>
          <p className="text-swamp text-[22px] font-inter leading-[24.2px]">
            {data.subheading || "Meet the experts behind our success"}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.teamMembers?.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-mystic rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                {/* Photo */}
                <div className="relative h-[320px] overflow-hidden">
                  {member.photo ? (
                    <Image
                      src={
                        "/placeholder.svg?height=320&width=320&query=professional headshot"
                      }
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300"></div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-swamp text-[22px] font-work-sans font-medium leading-[33px] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-swamp text-[16px] font-work-sans leading-[28px] mb-4">
                    {member.position}
                  </p>

                  {member.bio && (
                    <p className="text-swamp text-[14px] font-work-sans leading-[24px] mb-4 opacity-80">
                      {member.bio}
                    </p>
                  )}

                  {/* Social Links */}
                  {member.socialLinks && (
                    <div className="flex space-x-4">
                      {member.socialLinks.linkedin && (
                        <Link
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-swamp hover:text-brand-red transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      )}
                      {member.socialLinks.twitter && (
                        <Link
                          href={member.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-swamp hover:text-brand-red transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
