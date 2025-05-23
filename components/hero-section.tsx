import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  data: {
    heading?: string
    subheading?: {
      beforeHighlight: string
      highlight: string
    }
    description?: string
    ctaButton?: {
      text: string
      link: string
    }
  }
}

export default function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null

  return (
    <section className="w-full h-[1160px] bg-black relative overflow-hidden">
      <div className="max-w-[1290px] mx-auto h-full flex flex-col justify-center px-4 md:px-8 relative z-10">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-white text-[64px] font-inter leading-[70.4px] mb-4">
            {data.heading || "Next.js, Sanity and Expo\nDevelopment Agency"}
          </h1>
        </div>

        {/* Subheading with highlight */}
        <div className="flex items-center mb-6">
          <span className="text-white text-[22px] font-inter leading-[24.2px]">
            {data.subheading?.beforeHighlight || "Frictionless Development for "}
          </span>
          <div className="bg-brand-red px-2 py-1 ml-1">
            <span className="text-white text-[22px] font-inter leading-[24.2px]">
              {data.subheading?.highlight || "CTOs of Digital Product Scale-Ups."}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white text-[16px] font-work-sans leading-[28px] max-w-[844px] mb-12">
          {data.description ||
            "Leverage our proven processes and deep & narrow expertise to advance and innovate your digital products.\nInvest with confidence, paying only for outcomes that reflect our high standards."}
        </p>

        {/* CTA Button */}
        {data.ctaButton && (
          <Button
            asChild
            className="bg-gradient-brand hover:bg-gradient-brand/90 text-white rounded-full px-8 py-3 text-[16px] font-bold w-fit"
          >
            <Link href={data.ctaButton.link}>{data.ctaButton.text}</Link>
          </Button>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10">
        <div className="w-[79px] h-[79px] bg-gradient-brand rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(0,0,0,0.15)]">
          <ChevronDown className="w-6 h-7 text-white" />
        </div>
      </div>
    </section>
  )
}
