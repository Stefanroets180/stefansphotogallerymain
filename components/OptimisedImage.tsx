import Image from "next/image"

type OptimisedImageProps = {
  src: string
  alt: string
}

type imgixLoaderProps = {
  src: string
  width: number
  quality?: number
}

const imgixLoader = ({ src }: imgixLoaderProps) => {
  const url = new URL(src)

  const imageName = url.pathname.split("/").pop()

  const imgixUrl = new URL("https://stefanpix.imgix.net")
  imgixUrl.pathname = `/${imageName}`

  imgixUrl.searchParams.set("auto", "format")
  imgixUrl.searchParams.set("auto", "compress")

  return imgixUrl.href
}

export default function OptimisedImage(props: OptimisedImageProps) {
  const { src = "https://my-imgix-buckett.s3.us-east-1.amazonaws.com/uploads/pwl-4.webp", alt } = props

  return <Image objectFit="contain" loader={imgixLoader} width={1200} height={800} src={src} alt={alt} />
}
