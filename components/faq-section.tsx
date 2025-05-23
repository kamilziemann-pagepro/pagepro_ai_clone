import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQSectionProps {
  data: {
    heading?: string
    subheading?: string
    faqs?: Array<{
      question: string
      answer: string
    }>
  }
}

export default function FAQSection({ data }: FAQSectionProps) {
  if (!data) return null

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[1136px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-swamp text-[64px] font-inter leading-[70.4px] mb-4">
            {data.heading || "Frequently Asked Questions"}
          </h2>
          <p className="text-swamp text-[22px] font-inter leading-[24.2px]">
            {data.subheading || "Find answers to common questions about our services"}
          </p>
        </div>

        {/* FAQs */}
        <Accordion type="single" collapsible className="w-full">
          {data.faqs?.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-4">
              <AccordionTrigger className="text-swamp text-[22px] font-work-sans font-medium leading-[33px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-swamp text-[16px] font-work-sans leading-[28px] pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
