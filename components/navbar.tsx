import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";

interface NavbarProps {
  data: {
    logo?: {
      asset: any;
      alt?: string;
    };
    menuItems?: Array<{
      title: string;
      link: string;
    }>;
    ctaButton?: {
      text: string;
      link: string;
    };
  };
}

export default function Navbar({ data }: NavbarProps) {
  if (!data) return null;

  return (
    <header className="w-full h-[72px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] fixed top-0 left-0 z-50">
      <div className="max-w-[1536px] mx-auto h-full flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            {data.logo && (
              <Image
                src={"/placeholder.svg?height=40&width=243"}
                alt={data.logo.alt || "Pagepro Logo"}
                width={243}
                height={40}
                priority
                className="h-10 w-auto"
              />
            )}
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {data.menuItems?.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-mine-shaft text-[20px] font-light hover:text-brand-red transition-colors"
            >
              {item.title}
            </Link>
          ))}
          {data.ctaButton && (
            <Button
              asChild
              className="bg-gradient-brand hover:bg-gradient-brand/90 text-white rounded-full px-8 py-2 text-lg font-bold"
            >
              <Link href={data.ctaButton.link}>{data.ctaButton.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
