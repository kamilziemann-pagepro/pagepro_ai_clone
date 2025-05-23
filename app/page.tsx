import { client } from "@/lib/sanity"
import { allDataQuery } from "@/lib/queries"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import ClientLogosSection from "@/components/client-logos-section"
import TestimonialsSection from "@/components/testimonials-section"
import CaseStudiesSection from "@/components/case-studies-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import TechStackSection from "@/components/tech-stack-section"
import TeamSection from "@/components/team-section"
import FAQSection from "@/components/faq-section"
import BlogPreviewSection from "@/components/blog-preview-section"
import AwardsSection from "@/components/awards-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default async function Home() {
  const data = await client.fetch(allDataQuery)

  return (
    <main className="min-h-screen">
      <Navbar data={data.navbar} />
      <div className="pt-[72px]">
        <HeroSection data={data.hero} />
        <BenefitsSection data={data.benefits} />
        <ClientLogosSection data={data.clientLogos} />
        <TestimonialsSection data={data.testimonials} />
        <CaseStudiesSection data={data.caseStudies} />
        <ServicesSection data={data.services} />
        <ProcessSection data={data.process} />
        <TechStackSection data={data.techStack} />
        <TeamSection data={data.team} />
        <FAQSection data={data.faq} />
        <BlogPreviewSection data={data.blogPreview} />
        <AwardsSection data={data.awards} />
        <ContactSection data={data.contact} />
        <Footer data={data.footer} />
      </div>
    </main>
  )
}
