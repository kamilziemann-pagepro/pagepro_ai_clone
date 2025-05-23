import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  data: {
    heading?: string
    description?: string
    ctaButton?: {
      text: string
      link: string
    }
  }
}

export default function ContactSection({ data }: ContactSectionProps) {
  if (!data) return null

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[1290px] mx-auto px-4 md:px-8">
        <div className="bg-mystic p-16 text-center">
          <p className="text-swamp text-[16px] font-inter leading-[17.6px] mb-4">Need an expert's advice?</p>

          <h2 className="text-swamp text-[36px] font-inter leading-[46.8px] mb-6">
            {data.heading || "Let's talk\nabout your project"}
          </h2>

          <p className="text-swamp text-[16px] font-work-sans leading-[28px] mb-8">
            {data.description || "Tell us about your challenge, and let's get the ball rolling."}
          </p>

          {data.ctaButton && (
            <Button
              asChild
              className="bg-gradient-brand hover:bg-gradient-brand/90 text-white rounded-full px-8 py-3 text-[16px] font-bold"
            >
              <Link href={data.ctaButton.link}>{data.ctaButton.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
