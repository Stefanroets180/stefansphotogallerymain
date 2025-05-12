import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stefan's Photo Gallery",
  description: "A beautiful photo gallery with masonry grid and light-gallery",
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
  the_natural_world,
  urban,
  work_with_people,
  abstract_expressions_and_artistry,
  idea_driven_visual_storytelling,
  cityscapes_and_structures,
  live_events,
  couture,
  commercial_photography,
}: {
  children: React.ReactNode
  the_natural_world: React.ReactNode
  urban: React.ReactNode
  work_with_people: React.ReactNode
  abstract_expressions_and_artistry: React.ReactNode
  idea_driven_visual_storytelling: React.ReactNode
  cityscapes_and_structures: React.ReactNode
  live_events: React.ReactNode
  couture: React.ReactNode
  commercial_photography: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
              {the_natural_world}
              {urban}
              {work_with_people}
              {abstract_expressions_and_artistry}
              {idea_driven_visual_storytelling}
              {cityscapes_and_structures}
              {live_events}
              {couture}
              {commercial_photography}
            </main>
            <footer className="py-6 border-t">
              <div className="container mx-auto px-4 text-center text-muted-foreground">
                © {new Date().getFullYear()} Stefan Roets Photography. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"
