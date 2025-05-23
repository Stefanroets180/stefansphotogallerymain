import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const urbanPhotos = [
  {
    id: "1",
    title: "Bluegrass Blues On Bourbon Street",
    src: "https://stefanpix.imgix.net/avif/blue-grass3.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "2",
    title: "Bluegrass Blues On Bourbon Street",
    src: "https://stefanpix.imgix.net/avif/blue-grass1.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "3",
    title: "Bluegrass Blues On Bourbon Street",
    src: "https://stefanpix.imgix.net/avif/blue-grass2.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "4",
    title: "Tuba Riddim Jackson Square",
    src: "https://stefanpix.imgix.net/avif/Tuba-Man.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "5",
    title: "Calliope Player of Steamboat Natchez",
    src: "https://stefanpix.imgix.net/avif/steam-orgain.avif", // Replace with your S3 URL
    width: 5376,
    height: 3744,
    alt: "Portrait in natural environment",
  },

  {
    id: "6",
    title: "New Orleans Jackson Square",
    src: "https://stefanpix.imgix.net/avif/New-Orlines-2.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },

  {
    id: "7",
    title: "Close-up Guitar-Player Hand",
    src: "https://stefanpix.imgix.net/avif/hand.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "8",
    title: "Newton Motion Blur Selfie",
    src: "https://stefanpix.imgix.net/avif/New-Town.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "9",
    title: "Blind Beggar",
    src: "https://stefanpix.imgix.net/avif/blink-man.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "10",
    title: "Street Beggar",
    src: "https://stefanpix.imgix.net/avif/Twatsjie.avif", // Replace with your S3 URL
    width: 2375,
    height: 3744,
    alt: "Professional studio portrait",
  },

  {
    id: "11",
    title: "Newton Newspaper Vendor",
    src: "https://stefanpix.imgix.net/avif/News-paper-man.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "12",
    title: "Ndebele Beads",
    src: "https://stefanpix.imgix.net/avif/Goggo.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Professional studio portrait",
  },
]

export default function UrbanPage() {
  return <MasonryGrid photos={urbanPhotos} category="Urban" />
}
