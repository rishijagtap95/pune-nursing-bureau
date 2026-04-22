type AspectRatio = "square" | "video" | "portrait" | "landscape" | "auto";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  /**
   * Aspect ratio for the image container
   * - "square": 1:1 ratio
   * - "video": 16:9 ratio (common for hero images)
   * - "portrait": 3:4 ratio
   * - "landscape": 4:3 ratio
   * - "auto": fills parent container (default)
   */
  aspectRatio?: AspectRatio;
}

/**
 * Responsive centered image component
 * Automatically centers and scales images across all screen sizes
 *
 * @example
 * // Full width, maintains 16:9 aspect ratio on all devices
 * <ResponsiveImage src="/image.jpg" alt="Description" aspectRatio="video" />
 *
 * @example
 * // With custom styling
 * <ResponsiveImage
 *   src="/image.jpg"
 *   alt="Description"
 *   aspectRatio="portrait"
 *   containerClassName="rounded-lg shadow-lg"
 * />
 */
export default function ResponsiveImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  aspectRatio = "auto",
}: ResponsiveImageProps) {
  const aspectRatioMap = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    auto: "",
  };

  const aspectClass = aspectRatioMap[aspectRatio];

  return (
    <div
      className={`flex items-center justify-center w-full ${aspectClass} overflow-hidden bg-gray-50 ${containerClassName}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover object-center ${className}`}
      />
    </div>
  );
}
