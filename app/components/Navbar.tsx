import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-semibold">
          BarnStorm
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <Link href="/about">About</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Button size="sm">Get Started</Button>
      </div>
    </header>
  )
}
