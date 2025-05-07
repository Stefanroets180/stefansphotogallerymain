export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Gallery</h1>
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <p>
          Welcome to our photo gallery, a curated collection of stunning imagery from around the world. Our mission is
          to showcase the beauty of nature, urban landscapes, and the human experience through high-quality photography.
        </p>
        <p>
          All images in our gallery are professionally shot and optimized for web viewing. We use AWS S3 for reliable
          storage and imgix for advanced image processing and optimization, ensuring fast loading times and beautiful
          presentation across all devices.
        </p>
        <h2>Our Technology</h2>
        <p>Our gallery is built with modern web technologies to provide the best possible user experience:</p>
        <ul>
          <li>
            <strong>Next.js:</strong> For fast, server-rendered React applications
          </li>
          <li>
            <strong>Parallel Routing:</strong> To efficiently manage different gallery categories
          </li>
          <li>
            <strong>React Masonry CSS:</strong> For beautiful, responsive grid layouts
          </li>
          <li>
            <strong>Abstract Expressions and Artistry:</strong> For immersive fullscreen photo viewing
          </li>
          <li>
            <strong>AWS S3:</strong> For reliable image storage
          </li>
          <li>
            <strong>imgix:</strong> For advanced image optimization and processing
          </li>
        </ul>
        <h2>Our Collections</h2>
        <p>We currently feature three main collections, each showcasing a different aspect of photography:</p>
        <ul>
          <li>
            <strong>The Natural World:</strong> Breathtaking landscapes, wildlife, and natural wonders
          </li>
          <li>
            <strong>Urban:</strong> City skylines, street photography, and architectural marvels
          </li>
          <li>
            <strong>Work With People:</strong> Captivating images of people from diverse backgrounds and cultures
          </li>
        </ul>
        <p>We regularly update our collections with new images, so be sure to check back often to see what's new.</p>
      </div>
    </div>
  )
}
