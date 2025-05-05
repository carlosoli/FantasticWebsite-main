import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  tagText?: string;
}

const HeroSection = ({
  title,
  description,
  imageUrl,
  ctaText,
  ctaLink,
  tagText = "Em Destaque",
}: HeroSectionProps) => {
  return (
    <section className="relative h-[500px] md:h-[600px] bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Jesus Alves Amazonas em evento"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
        <div className="max-w-2xl mb-8">
          <span className="inline-block bg-accent text-background-dark px-3 py-1 text-sm font-semibold mb-3 rounded">
            {tagText}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            {description}
          </p>
          <Link
            href={ctaLink}
            className="mt-6 inline-block bg-accent hover:bg-accent-hover text-background-dark font-semibold px-6 py-3 rounded-md transition-colors duration-300"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
