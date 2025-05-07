import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const the_natural_world_Photos = [
  {
    id: "1",
    title: "Coffee Bay",
    src: "https://stefanpix.imgix.net/uploads/coffebay1.avif", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "See landscape with rocks",
  },
  {
    id: "2",
    title: "Coffee Bay2",
    src: "https://stefanpix.imgix.net/avif/coffebaycolor.avif", // Replace with your S3 URL
    width: 5615,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "3",
    title: "Farm 1",
    src: "https://stefanpix.imgix.net/avif/farm1.avif", // Replace with your S3 URL
    width: 3744,
    height: 2496,
    alt: "Portrait in natural environment",
  },
  {
    id: "4",
    title: "Farm 2",
    src: "https://stefanpix.imgix.net/avif/farm2.avif", // Replace with your S3 URL
    width: 5617,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "5",
    title: "Lesotho 1",
    src: "https://stefanpix.imgix.net/avif/Lesotho1.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "6",
    title: "Lesotho 2",
    src: "https://stefanpix.imgix.net/avif/Lesotho2.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "7",
    title: "Kalk Bay1",
    src: "https://stefanpix.imgix.net/avif/Kalk-bay.avif", // Replace with your S3 URL
    width: 5301,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "8",
    title: "Kalk Bay2",
    src: "https://stefanpix.imgix.net/avif/kalk-bay2.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "9",
    title: "Table Mountain",
    src: "https://stefanpix.imgix.net/avif/Table-Mountain.avif", // Replace with your S3 URL
    width: 2647,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "10",
    title: "Lagoon House",
    src: "https://stefanpix.imgix.net/avif/wildernes-og-huis.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "11",
    title: "Wilderness",
    src: "https://stefanpix.imgix.net/avif/wildernes2.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "12",
    title: "Hout Bay",
    src: "https://stefanpix.imgix.net/avif/houtbaai.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "13",
    title: "Liandudno",
    src: "https://stefanpix.imgix.net/avif/Liandudno.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "14",
    title: "West Coast Fire Sun",
    src: "https://stefanpix.imgix.net/avif/weskusfiresun.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "15",
    title: "Rusted Ship",
    src: "https://stefanpix.imgix.net/avif/rust-ship.avif", // Replace with your S3 URL
    width: 5637,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "16",
    title: "See Life",
    src: "https://stefanpix.imgix.net/avif/see-life.avif", // Replace with your S3 URL
    width: 5637,
    height: 3744,
    alt: "Candid street portrait",
  },
  // {
  //   id: "17",
  //   title: "Cultural Portrait",
  //   src: "url('/placeholder.svg?height=800&width=1200')", // Replace with your S3 URL
  //   width: 1600,
  //   height: 900,
  //   alt: "Portrait showcasing cultural elements",
  // },
  // {
  //   id: "18",
  //   title: "Black and White Portrait",
  //   src: "url('/placeholder.svg?height=800&width=1200')", // Replace with your S3 URL
  //   width: 800,
  //   height: 1200,
  //   alt: "Dramatic black and white portrait",
  // },
  // {
  //   id: "19",
  //   title: "Family Portrait",
  //   src: "url('/placeholder.svg?height=800&width=1200')", // Replace with your S3 URL
  //   width: 1200,
  //   height: 800,
  //   alt: "Family portrait in outdoor setting",
  // },
]

export default function The_Natural_World_Page() {
  return <MasonryGrid photos={the_natural_world_Photos} category="The Natural World" />
}
