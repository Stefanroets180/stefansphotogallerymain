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
    title: "Lagoon House Wilderness",
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
  {
    id: "17",
    title: "Hawk one",
    src: "https://stefanpix.imgix.net/avif/valk1.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "18",
    title: "Martial Eagle",
    src: "https://stefanpix.imgix.net/avif/Martial-Eagle-1.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "19",
    title: "Lilac Breasted Roller",
    src: "https://stefanpix.imgix.net/avif/Lilac-Breasted-Roller.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "20",
    title: "African Harrier Hawk",
    src: "https://stefanpix.imgix.net/avif/African-Harrier-Hawk.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "21",
    title: "Black Headed Oriole",
    src: "https://stefanpix.imgix.net/avif/Black-Headed-Oriole.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "22",
    title: "Common Slender Mongoose",
    src: "https://stefanpix.imgix.net/avif/Common-Slender-Mongoose.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "23",
    title: "Leopard",
    src: "https://stefanpix.imgix.net/avif/Leopard.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "24",
    title: "Lion Rock",
    src: "https://stefanpix.imgix.net/avif/lion-rock.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "25",
    title: "Framed Giraffes",
    src: "https://stefanpix.imgix.net/avif/Framed-Giraffes.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "26",
    title: "Elephant",
    src: "https://stefanpix.imgix.net/avif/Elephant.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  // {
  //   id: "27",
  //   title: "Black and White Portrait",
  //   src: "url('/placeholder.svg?height=800&width=1200')", // Replace with your S3 URL
  //   width: 800,
  //   height: 1200,
  //   alt: "Dramatic black and white portrait",
  // },
  // {
  //   id: "28",
  //   title: "Family Portrait",
  //   src: "url('/placeholder.svg?height=800&width=1200')", // Replace with your S3 URL
  //   width: 1200,
  //   height: 800,
  //   alt: "Family portrait in outdoor setting",
  // },
]

// @ts-ignore
export default function The_Natural_World_Page() {
  return <MasonryGrid photos={the_natural_world_Photos} category="The Natural World" />
}
