import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const cityscapes_and_structures_Photos = [
  {
    id: "1",
    title: "",
    src: "https://stefanpix.imgix.net/avif/kerk-moon.avif", // Replace with your S3 URL
    width: 2431,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "2",
    title: "",
    src: "https://stefanpix.imgix.net/avif/building-light.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "3",
    title: "",
    src: "https://stefanpix.imgix.net/avif/austin-kerk.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "4",
    title: "",
    src: "https://stefanpix.imgix.net/avif/new-orlines-kerk.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "5",
    title: "",
    src: "https://stefanpix.imgix.net/avif/park-new-orlens.avif", // Replace with your S3 URL
    width: 5617,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "6",
    title: "Street shot",
    src: "https://stefanpix.imgix.net/avif/city-structur-1.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "7",
    title: "Brige",
    src: "https://stefanpix.imgix.net/avif/brige-no1.avif", // Replace with your S3 URL
    width: 6013,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "8",
    title: "NWU",
    src: "https://stefanpix.imgix.net/avif/structur1.avif", // Replace with your S3 URL
    width: 6013,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
];

export default function Cityscapes_and_Structures_Page() {
  return <MasonryGrid photos={cityscapes_and_structures_Photos} category="Cityscapes and Structures" />
}
