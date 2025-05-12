import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const commercial_photography_Photos = [
  {
    id: "1",
    title: "Snus Lucky Strike",
    src: "https://stefanpix.imgix.net/avif/commercial1.avif", // Replace with your S3 URL
    width: 5764,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "2",
    title: "Unleash the Beast",
    src: "https://stefanpix.imgix.net/avif/commercial2.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Professional studio portrait",
  },
  // {
  //   id: "3",
  //   title: "Street Portrait",
  //   src: "https://your-s3-bucket.s3.amazonaws.com/portraits/street.jpg", // Replace with your S3 URL
  //   width: 1000,
  //   height: 1500,
  //   alt: "Candid street portrait",
  // },
  // {
  //   id: "4",
  //   title: "Cultural Portrait",
  //   src: "https://your-s3-bucket.s3.amazonaws.com/portraits/cultural.jpg", // Replace with your S3 URL
  //   width: 1600,
  //   height: 900,
  //   alt: "Portrait showcasing cultural elements",
  // },
  // {
  //   id: "5",
  //   title: "Black and White Portrait",
  //   src: "https://your-s3-bucket.s3.amazonaws.com/portraits/bw.jpg", // Replace with your S3 URL
  //   width: 800,
  //   height: 1200,
  //   alt: "Dramatic black and white portrait",
  // },
  // {
  //   id: "6",
  //   title: "Family Portrait",
  //   src: "https://your-s3-bucket.s3.amazonaws.com/portraits/family.jpg", // Replace with your S3 URL
  //   width: 1200,
  //   height: 800,
  //   alt: "Family portrait in outdoor setting",
  // },
];

export default function Commercial_Photography_Page() {
  return <MasonryGrid photos={commercial_photography_Photos} category="Commercial Photography" />
}
