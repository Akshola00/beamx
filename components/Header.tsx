'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"

import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ModeToggle } from './toggle'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <header className="w-full bg-none">
      <div className="mx-auto flex w-full md:w-[60%] bg-background items-center justify-between mt-4 py-4 px-4 md:px-8 rounded-full shadow-inner">
        <h1 className="text-2xl font-bold text-foreground">BeamX</h1>
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Button
                  variant="default"
                  className="w-full bg-purple-600 text-white hover:bg-purple-700"
                  onClick={() => setIsOpen(false)}
                >
                  Connect Wallet
                </Button>
                <ModeToggle />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <Button
              variant="default"
              className="bg-purple-600 text-white hover:bg-purple-700"
            >
              Connect Wallet
            </Button>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}



// You'll need to create this hook in your project
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches, query])

  return matches
}