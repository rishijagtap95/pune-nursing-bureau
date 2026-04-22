interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Hero/Banner image component optimized for mobile and desktop
 * - Mobile: 60vh height (compact)
 * - Tablet: 70vh height
 * - Desktop: full screen (min-h-screen)
 * 
 * @example
 * <HeroImage src="/hero.jpg" alt="Hero banner" />
 */
export default function HeroImage({
  src,
  alt,
  className = "",
}: HeroImageProps) {
  return (
    <div className="min-h-60 sm:min-h-96 lg:min-h-screen w-full overflow-hidden bg-gray-100">
      <img
        src={src}
        alt={alt}
        loading="eager"
        className={`w-full h-full object-cover object-center ${className}`}
      />
    </div>
  );
}
