"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Masonry from "react-masonry-css"
import LightGallery from "lightgallery/react"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

interface Photo {
  id: string
  title: string
  src: string
  width: number
  height: number
  alt: string
}

interface MasonryGridProps {
  photos: Photo[]
  category: string
}

export default function MasonryGrid({ photos, category }: MasonryGridProps) {
  const [breakpointCols, setBreakpointCols] = useState({
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  });

  // Handle window resize for responsive columns
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setBreakpointCols({ ...breakpointCols, default: 1 })
      } else if (width < 700) {
        setBreakpointCols({ ...breakpointCols, default: 2 })
      } else if (width < 1100) {
        setBreakpointCols({ ...breakpointCols, default: 3 })
      } else {
        setBreakpointCols({ ...breakpointCols, default: 4 })
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  // Generate optimized imgix URLs
  const getImgixUrl = (src: string, width: number) => {
    // This assumes your S3 images are already set up with imgix
    // Adjust parameters based on your imgix configuration
    return `${src}?w=${width}&auto=format,compress&q=90`
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">{category} Gallery</h2>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} selector=".gallery-item">
        <Masonry breakpointCols={breakpointCols} className="flex w-auto -ml-4" columnClassName="pl-4 bg-clip-padding">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item mb-4 overflow-hidden rounded-lg cursor-pointer transition-all hover:opacity-90"
              data-src={photo.src}
              data-sub-html={`<h4>${photo.title}</h4>`}
            >
              <div className="relative">
                <Image
                  src={getImgixUrl(photo.src, 600) || "/placeholder.svg"}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QOQvhAAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </Masonry>
      </LightGallery>
    </div>
  )
}
