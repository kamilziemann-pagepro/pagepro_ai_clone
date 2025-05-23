import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface BlogPreviewSectionProps {
  data: {
    heading?: string;
    subheading?: string;
    blogPosts?: Array<{
      title: string;
      excerpt: string;
      slug: string;
      publishedAt: string;
      featuredImage?: any;
      categories?: string[];
    }>;
    ctaButton?: {
      text: string;
      link: string;
    };
  };
}

export default function BlogPreviewSection({ data }: BlogPreviewSectionProps) {
  if (!data) return null;

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <section className="w-full bg-mystic py-32">
      <div className="max-w-[1354px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-swamp text-[64px] font-inter leading-[70.4px] mb-4">
            {data.heading || "Latest from Our Blog"}
          </h2>
          <p className="text-swamp text-[22px] font-inter leading-[24.2px]">
            {data.subheading || "Insights, tips, and industry trends"}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {data.blogPosts?.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:translate-y-[-8px]">
                {/* Featured Image */}
                <div className="h-[240px] relative">
                  {post.featuredImage ? (
                    <Image
                      src={
                        "/placeholder.svg?height=240&width=400&query=blog post"
                      }
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200"></div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Categories */}
                  {post.categories && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.map((category, catIndex) => (
                        <span
                          key={catIndex}
                          className="bg-mystic text-swamp text-[10px] font-work-sans px-3 py-1 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Date */}
                  <div className="flex items-center text-swamp text-[14px] font-work-sans mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-swamp text-[22px] font-work-sans font-medium leading-[33px] mb-4">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-swamp text-[16px] font-work-sans leading-[28px] mb-6">
                    {post.excerpt}
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
