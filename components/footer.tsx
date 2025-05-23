import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface FooterProps {
  data: {
    heading?: string;
    contactEmail?: string;
    clutchRating?: {
      rating: number;
      reviewCount: number;
    };
    sections?: Array<{
      title: string;
      links: Array<{
        title: string;
        url: string;
      }>;
    }>;
    offices?: Array<{
      country: string;
      address: string;
      phone: string;
    }>;
    partnerships?: Array<{
      name: string;
      logo?: any;
      description: string;
    }>;
    socialLinks?: Array<{
      platform: string;
      url: string;
    }>;
    copyright?: string;
  };
}

export default function Footer({ data }: FooterProps) {
  if (!data) return null;

  return (
    <footer className="w-full bg-swamp text-white py-32">
      <div className="max-w-[1354px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-white text-[64px] font-inter leading-[70.4px] max-w-[790px]">
            {data.heading || "Have a question?\nContact us directly."}
          </h2>

          {/* Clutch Rating */}
          {data.clutchRating && (
            <div className="bg-white text-swamp p-4 rounded flex items-center space-x-4">
              <div className="w-10 h-12 bg-big-stone flex items-center justify-center">
                <div className="text-white text-sm">C</div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-[24px] font-work-sans">
                    {data.clutchRating.rating}
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-red-orange text-red-orange"
                    />
                  ))}
                </div>
                <p className="text-[10px] font-work-sans">
                  Based on {data.clutchRating.reviewCount} Clutch reviews
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Contact Email Button */}
        {data.contactEmail && (
          <div className="mb-16">
            <Button
              asChild
              className="bg-gradient-brand hover:bg-gradient-brand/90 text-white rounded-full px-8 py-3 text-[16px] font-bold"
            >
              <Link href={`mailto:${data.contactEmail}`}>
                {data.contactEmail}
              </Link>
            </Button>
          </div>
        )}

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {data.sections?.map((section, index) => (
            <div key={index}>
              <h3 className="text-white text-[16px] font-work-sans font-semibold leading-[18.7px] mb-4">
                {section.title}
              </h3>
              <div className="border-t border-tiber mb-4"></div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-white text-[11px] font-work-sans leading-[19.9px] hover:text-brand-red transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Offices */}
          {data.offices && (
            <div>
              <h3 className="text-white text-[16px] font-work-sans font-semibold leading-[18.7px] mb-4">
                Our Offices
              </h3>
              <div className="border-t border-tiber mb-4"></div>
              <div className="space-y-6">
                {data.offices.map((office, index) => (
                  <div key={index}>
                    <p className="text-white text-[11px] font-work-sans leading-[19.9px]">
                      {office.country}
                      <br />
                      {office.address}
                      <br />
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Partnerships & Awards */}
        {data.partnerships && (
          <>
            <h3 className="text-white text-[16px] font-work-sans font-semibold leading-[18.7px] mb-4">
              Partnerships & Awards
            </h3>
            <div className="border-t border-tiber mb-8"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {data.partnerships.map((partnership, index) => (
                <div key={index} className="text-center">
                  {partnership.logo && (
                    <Image
                      src={"/placeholder.svg"}
                      alt={partnership.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 mx-auto mb-4"
                    />
                  )}
                  <p className="text-white text-[11px] font-work-sans leading-[19.9px] opacity-50">
                    {partnership.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-tiber mb-8"></div>
          </>
        )}

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link
              href="/privacy-policy"
              className="text-white text-[11px] font-work-sans leading-[19.9px]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies-policy"
              className="text-white text-[11px] font-work-sans leading-[19.9px]"
            >
              Cookies Policy
            </Link>
            <p className="text-white text-[11px] font-work-sans leading-[19.9px]">
              {data.copyright || "2025 © All rights reserved. Pagepro Ltd."}
            </p>
          </div>

          {/* Social Links */}
          {data.socialLinks && (
            <div className="flex items-center space-x-6">
              {data.socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="text-white hover:text-brand-red transition-colors"
                >
                  <div className="w-4 h-4 bg-white rounded"></div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
