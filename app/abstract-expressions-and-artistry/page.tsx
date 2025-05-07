import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const abstract_expressions_and_artistry_Photos = [
  {
    id: "1",
    title: "Savior On the Cross",
    src: "https://stefanpix.imgix.net/uploads/pwl-1.webp", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "A Light Painting",
  },
  {
    id: "5",
    title: "Galaxy eye",
    src: "https://stefanpix.imgix.net/uploads/eye2.webp", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Macro",
  },
  {
    id: "7",
    title: "Chameleon tail",
    src: "http://stefanpix.imgix.net/uploads/chameleon2.avif", // Replace with your S3 URL
    width: 3744,
    height: 2496,
    alt: "Macro",
  },
  {
    id: "3",
    title: "Synesthetic Golf",
    src: "https://stefanpix.imgix.net/uploads/pwl-2.webp", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Light Painting",
  },

  {
    id: "2",
    title: "Windmill On the Far Long Exposure",
    src: "https://stefanpix.imgix.net/uploads/pwl-4.webp", // Replace with your S3 URL
    width: 3050,
    height: 3744,
    alt: "Light Painting",
  },

  {
    id: "6",
    title: "Chameleon eye",
    src: "https://stefanpix.imgix.net/uploads/chameleon1.avif", // Replace with your S3 URL
    width: 3744,
    height: 2496,
    alt: "Macro",
  },
  {
    id: "4",
    title: "synesthetic Golf II",
    src: "https://stefanpix.imgix.net/uploads/pwl-3.webp", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Light Painting",
  },
  {
    id: "8",
    title: "fish eye selfie",
    src: "https://stefanpix.imgix.net/uploads/backgroundpics3.webp", // Replace with your S3 URL
    width: 3600,
    height: 2400,
    alt: "me",
  },
]

export default function Abstract_Expressions_and_Artistry_Page() {
  return <MasonryGrid photos={abstract_expressions_and_artistry_Photos} category="Abstract Expressions and Artistry" />
}
