import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const live_events_Photos = [
  {
    id: "3",
    title: "Black and White Portrait",
    src: "https://stefanpix.imgix.net/avif/band3.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "4",
    title: "Environmental Portrait",
    src: "https://stefanpix.imgix.net/avif/band10.avif", // Replace with your S3 URL
    width: 2502,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "5",
    title: "Street Portrait",
    src: "https://stefanpix.imgix.net/avif/band5.avif", // Replace with your S3 URL
    width: 2452,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "6",
    title: "Cultural Portrait",
    src: "https://stefanpix.imgix.net/avif/band6.avif", // Replace with your S3 URL
    width: 2451,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "7",
    title: "Family Portrait",
    src: "https://stefanpix.imgix.net/avif/band7.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "8",
    title: "Studio Portrait",
    src: "https://stefanpix.imgix.net/avif/band8.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "9",
    title: "Street Portrait",
    src: "https://stefanpix.imgix.net/avif/band9.avif", // Replace with your S3 URL
    width: 5724,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "10",
    title: "Cultural Portrait",
    src: "https://stefanpix.imgix.net/avif/band4.avif", // Replace with your S3 URL
    width: 5849,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "11",
    title: "Black and White Portrait",
    src: "https://stefanpix.imgix.net/avif/band11.avif", // Replace with your S3 URL
    width: 2733,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
]

export default function Live_Events_Page() {
  return <MasonryGrid photos={live_events_Photos} category="Live Events" />
}
