import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const monochromatic_mastery_Photos = [
  {
    id: "1",
    title: "Studio Portrait",
    src: "url('/placeholder.svg?height=800&width=1200')", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "Professional studio portrait",
  },
  /*{
    id: "2",
    title: "Environmental Portrait",
    src: "https://your-s3-bucket.s3.amazonaws.com/portraits/environmental.jpg", // Replace with your S3 URL
    width: 1200,
    height: 800,
    alt: "Portrait in natural environment",
  },
  {
    id: "3",
    title: "Street Portrait",
    src: "https://your-s3-bucket.s3.amazonaws.com/portraits/street.jpg", // Replace with your S3 URL
    width: 1000,
    height: 1500,
    alt: "Candid street portrait",
  },
  {
    id: "4",
    title: "Cultural Portrait",
    src: "https://your-s3-bucket.s3.amazonaws.com/portraits/cultural.jpg", // Replace with your S3 URL
    width: 1600,
    height: 900,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "5",
    title: "Black and White Portrait",
    src: "https://your-s3-bucket.s3.amazonaws.com/portraits/bw.jpg", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "6",
    title: "Family Portrait",
    src: "https://your-s3-bucket.s3.amazonaws.com/portraits/family.jpg", // Replace with your S3 URL
    width: 1200,
    height: 800,
    alt: "Family portrait in outdoor setting",
  },*/
];

export default function Monochromatic_Mastery_Page() {
  return <MasonryGrid photos={monochromatic_mastery_Photos} category="Monochromatic Mastery" />
}
