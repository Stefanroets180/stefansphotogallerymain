import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const idea_driven_visual_storytelling_Photos = [
  {
    id: "1",
    title: "Ploting",
    src: "https://stefanpix.imgix.net/avif/storry2.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "2",
    title: "The Deed is Done",
    src: "https://stefanpix.imgix.net/avif/storry1.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "3",
    title: "The End Result",
    src: "https://stefanpix.imgix.net/avif/storry3.avif", // Replace with your S3 URL
    width: 5617,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
]

export default function Idea_Driven_Visual_Storytelling_Page() {
  return <MasonryGrid photos={idea_driven_visual_storytelling_Photos} category="Abstract Visual Storytelling" />
}
