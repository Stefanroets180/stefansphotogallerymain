import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const couturePhotos = [
  {
    id: "1",
    title: "",
    src: "https://stefanpix.imgix.net/avif/couture4.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "2",
    title: "",
    src: "https://stefanpix.imgix.net/avif/couture3.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "3",
    title: "",
    src: "https://stefanpix.imgix.net/avif/couture5.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "4",
    title: "",
    src: "https://stefanpix.imgix.net/avif/couture1.avif", // Replace with your S3 URL
    width: 2995,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "5",
    title: "",
    src: "https://stefanpix.imgix.net/avif/couture2.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "6",
    title: "",
    src: "https://stefanpix.imgix.net/avif/mod1.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "7",
    title: "",
    src: "https://stefanpix.imgix.net/avif/mod2.avif", // Replace with your S3 URL
    width: 5627,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "8",
    title: "",
    src: "https://stefanpix.imgix.net/avif/mod3.avif", // Replace with your S3 URL
    width: 2491,
    height: 3744,
    alt: "Professional studio portrait",
  },
];

export default function CouturePage() {
  return <MasonryGrid photos={couturePhotos} category="Couture" />
}
