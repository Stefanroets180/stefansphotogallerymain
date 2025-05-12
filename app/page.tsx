import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col items-center justify-center text-center space-y-8 py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">A Moment in Time</h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          Explore a collections of photography across various categories. All images are optimized for the best viewing
          experience.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/the-natural-world">The Natural World Gallery</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/urban">Urban Gallery</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/work-with-people">Work With People</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/abstract-expressions-and-artistry">Abstract Expressions and Artistry Gallery</Link>
          </Button>

          <Button asChild size="lg">
            <Link href="/idea-driven-visual-storytelling">Idea Driven Visual Storytelling</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/cityscapes-and-structures">Cityscapes and Structures</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/live-events">Live Events</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/couture">Couture Gallery</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/commercial-photography">Commercial Photography Gallery</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/uploads/coffebay1.avif?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">The Natural World</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Breathtaking landscapes, wildlife, and natural wonders from around the world.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/the-natural-world">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/avif/New-Orlines-2.avif?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Urban</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Street photography, and urban architecture with metropolitan life.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/urban">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/uploads/eye2.webp?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Abstract Expressions and Artistry</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Encompass abstract photos, like close-ups of objects eg, Macro or Light paintings, Fine art, Composite
              photography etc. Something a bit more creative different and out there.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/abstract-expressions-and-artistry">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/avif/commercial1.avif?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Commercial Photography</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Promote or sell a product, service, or business. Encompassing various styles like product, food, and
              lifestyle photography.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/commercial-photography">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/avif/couture4.avif?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-stone-500">
              <h3 className="text-xl font-bold">Couture</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Focuses on capturing the artistry and luxury of high-end, bespoke garments and fashion
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/couture">View Gallery</Link>
            </Button>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/avif/band3.avif?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Live Events</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Captures the energy and candid moments of events, from concerts.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/live-events">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/avif/brige-no1.avif?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Cityscapes and Structures</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Capturing the essence of the environment and its architectural forms. It typically includes a wide-angle
              shot of a city skyline.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/cityscapes-and-structures">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card- foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/avif/storry3.avif?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Idea Driven Visual Storytelling</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Pushes beyond simply capturing a scene. Starting with a concept or a story,and use creativity to bring
              vision to life.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/idea-driven-visual-storytelling">View Gallery</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://stefanpix.imgix.net/avif/portit-1-of-2_1.avif?height=400&width=600')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Work With People</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              Captivating portraits showcasing the diversity and beauty of people from different cultures.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/work-with-people">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
