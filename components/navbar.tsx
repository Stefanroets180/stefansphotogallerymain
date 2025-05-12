"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./mode-toggle"

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Galleries",
    path: "#",
    dropdown: [
      { name: "The Natural World", path: "/the-natural-world" },
      { name: "Urban", path: "/urban" },
      { name: "Work With People", path: "/work-with-people" },
      { name: "Abstract Expressions and Artistry", path: "/abstract-expressions-and-artistry" },
      { name: "Abstract Visual Storytelling", path: "/idea-driven-visual-storytelling" },
      { name: "Cityscapes and Structures", path: "/cityscapes-and-structures" },
      { name: "Live Events", path: "/live-events" },
      { name: "Couture", path: "/couture" },
      { name: "Commercial Photography", path: "/commercial-photography" },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Stefan Roets Photography
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 px-2">
                      {link.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {link.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.name} asChild>
                        <Link href={dropdownItem.path}>{dropdownItem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t py-4">
          <nav className="container flex flex-col space-y-4">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="space-y-2">
                    <div className="font-medium">{link.name}</div>
                    <div className="pl-4 space-y-2">
                      {link.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className={`block text-sm ${
                            pathname === dropdownItem.path ? "text-foreground" : "text-muted-foreground"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium ${
                    pathname === link.path ? "text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
