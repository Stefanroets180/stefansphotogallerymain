import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const work_with_people_Photos = [
  {
    id: "1",
    title: "Hurdles 800m",
    src: "https://stefanpix.imgix.net/uploads/run1.avif", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "Professional studio portrait",
  },
  {
    id: "2",
    title: "Hurdles 800m",
    src: "https://stefanpix.imgix.net/uploads/run2.avif", // Replace with your S3 URL
    width: 1200,
    height: 800,
    alt: "Portrait in natural environment",
  },
  {
    id: "3",
    title: "Hurdles 800m",
    src: "https://stefanpix.imgix.net/uploads/run3.avif", // Replace with your S3 URL
    width: 1000,
    height: 1500,
    alt: "Candid street portrait",
  },
  {
    id: "4",
    title: "J.P KFD ",
    src: "https://stefanpix.imgix.net/uploads/skate1.avif", // Replace with your S3 URL
    width: 1600,
    height: 900,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "5",
    title: "Michele KFD",
    src: "https://stefanpix.imgix.net/uploads/skate2.avif", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "6",
    title: "",
    src: "https://stefanpix.imgix.net/avif/bw-naledi2.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "7",
    title: "",
    src: "https://stefanpix.imgix.net/avif/bw-naledi1.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "8",
    title: "",
    src: "https://stefanpix.imgix.net/avif/portrit-3-of-2.avif", // Replace with your S3 URL
    width: 5827,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "9",
    title: "",
    src: "https://stefanpix.imgix.net/avif/portit-1-of-2_1.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "10",
    title: "",
    src: "https://stefanpix.imgix.net/avif/bw-sheldon.avif", // Replace with your S3 URL
    width: 5616,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "11",
    title: "",
    src: "https://stefanpix.imgix.net/avif/divan-w.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "12",
    title: "",
    src: "https://stefanpix.imgix.net/avif/divan-w2.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "13",
    title: "",
    src: "https://stefanpix.imgix.net/avif/divan-w3.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "14",
    title: "",
    src: "https://stefanpix.imgix.net/avif/divan-w4.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "15",
    title: "",
    src: "https://stefanpix.imgix.net/avif/working1.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "16",
    title: "",
    src: "https://stefanpix.imgix.net/avif/working2.avif", // Replace with your S3 URL
    width: 4992,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
  {
    id: "17",
    title: "",
    src: "https://stefanpix.imgix.net/avif/rose-old1.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Professional studio portrait",
  },
  {
    id: "18",
    title: "",
    src: "https://stefanpix.imgix.net/avif/rose-old2.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Portrait in natural environment",
  },
  {
    id: "19",
    title: "",
    src: "https://stefanpix.imgix.net/avif/90-1.avif", // Replace with your S3 URL
    width: 2468,
    height: 3744,
    alt: "Candid street portrait",
  },
  {
    id: "20",
    title: "",
    src: "https://stefanpix.imgix.net/avif/90-2.avif", // Replace with your S3 URL
    width: 4992,
    height: 3744,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "21",
    title: "",
    src: "https://stefanpix.imgix.net/avif/kat-old1.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Dramatic black and white portrait",
  },
  {
    id: "22",
    title: "",
    src: "https://stefanpix.imgix.net/avif/kat-old2.avif", // Replace with your S3 URL
    width: 2496,
    height: 3744,
    alt: "Family portrait in outdoor setting",
  },
];

export default function Work_With_People_Page() {
  return <MasonryGrid photos={work_with_people_Photos} category="Work With People" />
}
