export const navbarQuery = `*[_type == "navbar"][0]{
  logo,
  menuItems[]{
    title,
    link
  },
  ctaButton{
    text,
    link
  }
}`

export const heroQuery = `*[_type == "hero"][0]{
  heading,
  subheading,
  description,
  ctaButton{
    text,
    link
  }
}`

export const benefitsQuery = `*[_type == "benefits"][0]{
  heading,
  subheading,
  items[]{
    icon,
    title,
    description
  }
}`

export const clientLogosQuery = `*[_type == "clientLogos"][0]{
  heading,
  subheading,
  logos[]{
    name,
    logo
  }
}`

export const testimonialsQuery = `*[_type == "testimonials"][0]{
  videoThumbnail,
  testimonialItems[]{
    quote,
    author,
    company,
    backgroundColor
  }
}`

export const caseStudiesQuery = `*[_type == "caseStudies"][0]{
  heading,
  subheading,
  caseStudies[]{
    title,
    description,
    image,
    tags,
    link
  },
  ctaButton{
    text,
    link
  }
}`

export const servicesQuery = `*[_type == "services"][0]{
  heading,
  serviceItems[]{
    icon,
    title,
    description
  },
  ctaButton{
    text,
    link
  }
}`

export const processQuery = `*[_type == "process"][0]{
  heading,
  subheading,
  steps[]{
    number,
    title,
    description,
    icon
  }
}`

export const techStackQuery = `*[_type == "techStack"][0]{
  heading,
  technologies[]{
    name,
    icon
  }
}`

export const teamQuery = `*[_type == "team"][0]{
  heading,
  subheading,
  teamMembers[]{
    name,
    position,
    photo,
    bio,
    socialLinks
  }
}`

export const faqQuery = `*[_type == "faq"][0]{
  heading,
  subheading,
  faqs[]{
    question,
    answer
  }
}`

export const blogPreviewQuery = `*[_type == "blogPreview"][0]{
  heading,
  subheading,
  blogPosts[]{
    title,
    excerpt,
    slug,
    publishedAt,
    featuredImage,
    categories
  },
  ctaButton{
    text,
    link
  }
}`

export const awardsQuery = `*[_type == "awards"][0]{
  heading,
  subheading,
  awards[]{
    name,
    logo,
    description,
    year
  }
}`

export const contactQuery = `*[_type == "contact"][0]{
  heading,
  description,
  ctaButton{
    text,
    link
  }
}`

export const footerQuery = `*[_type == "footer"][0]{
  heading,
  contactEmail,
  clutchRating,
  sections[]{
    title,
    links[]{
      title,
      url
    }
  },
  offices[]{
    country,
    address,
    phone
  },
  partnerships[]{
    name,
    logo,
    description
  },
  socialLinks[]{
    platform,
    url
  },
  copyright
}`

export const allDataQuery = `{
  "navbar": ${navbarQuery},
  "hero": ${heroQuery},
  "benefits": ${benefitsQuery},
  "clientLogos": ${clientLogosQuery},
  "testimonials": ${testimonialsQuery},
  "caseStudies": ${caseStudiesQuery},
  "services": ${servicesQuery},
  "process": ${processQuery},
  "techStack": ${techStackQuery},
  "team": ${teamQuery},
  "faq": ${faqQuery},
  "blogPreview": ${blogPreviewQuery},
  "awards": ${awardsQuery},
  "contact": ${contactQuery},
  "footer": ${footerQuery}
}`
