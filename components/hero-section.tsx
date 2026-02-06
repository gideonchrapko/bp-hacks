"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { EVENTBRITE_URL } from "@/lib/constants"

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Purple image container - same max-width as content (max-w-7xl) */}
      <div className="absolute z-0 top-[80px] left-0 right-0 bottom-[30px] px-4 md:px-[30px]">
        <div className="max-w-7xl mx-auto h-full rounded-[15px] overflow-hidden shadow-none bg-hero-container bg-hero-pattern bg-repeat bg-auto" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="block">
              <Image
                src="/images/bp-hacks.svg"
                alt="BP Hacks"
                width={140}
                height={40}
                className="h-5 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm ">
              <a href="#prizes" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">Prizes</a>
              <a href="#info" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">Info</a>
              <a href="#agenda" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">Schedule</a>
              <a href="#judging" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">Judging</a>
              <a href="#faq" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">FAQ</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-foreground hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden md:flex items-center gap-2">
              <Button asChild size="sm" variant="secondary" className="bg-white text-black border-border hover:bg-gray-100 hover:text-black">
                <Link href="https://botpress.com" target="_blank" rel="noopener noreferrer">
                  Learn about Botpress
                </Link>
              </Button>
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu - full screen */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-hero-container flex flex-col animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="flex justify-end p-6">
              <button
                type="button"
                className="p-2 rounded-md text-white hover:bg-white/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-6 pt-4 pb-6 flex flex-col gap-6">
              <a href="#prizes" className="text-white text-lg py-2 hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Prizes</a>
              <a href="#info" className="text-white text-lg py-2 hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Info</a>
              <a href="#agenda" className="text-white text-lg py-2 hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Schedule</a>
              <a href="#judging" className="text-white text-lg py-2 hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Judging</a>
              <a href="#faq" className="text-white text-lg py-2 hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <div className="flex flex-col gap-3 pt-6 border-t border-white/20">
                <Button asChild size="default" variant="secondary" className="bg-white text-black border-border hover:bg-gray-100 hover:text-black w-full text-base">
                  <Link href="https://botpress.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                    Learn about Botpress
                  </Link>
                </Button>
                <Button asChild size="default" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full text-base">
                  <Link href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl text-center">
          <p className="text-sm font-mono mb-6 tracking-widest uppercase">
            <span className="px-2 py-1 rounded-sm bg-date-highlight">
              March 14th, 2026 &bull; Québec City &bull; Free Entry
            </span>
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance mb-8 bg-hero-container">
            Build, ship, and demo a Discord agent in one day with <span className="text-white">Botpress.</span>
          </h1>
          <p className="body-copy max-w-2xl mx-auto mb-12 bg-hero-container px-2">
          Join us for a one-day, in-person hackathon where participants will design and build creative, useful agents using Botpress. Whether you’re a student or a recent graduate, this event is a chance to experiment, collaborate, and ship something real — all in a single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              <Link href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer">
                Register on Eventbrite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-hero-container border border-black/60 hover:bg-hero-container-dark hover:text-black hover:border-black/60">
              <Link href="#agenda">View Schedule</Link>
            </Button>
          </div>
        </div>

        {/* Event Details */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-2 text-center bg-hero-container">
          <div>
            <p className="text-sm mb-1 font-mono uppercase tracking-wide">Location</p>
            <p className="text-foreground font-medium text-white">Québec City</p>
          </div>
          <div>
            <p className="text-sm mb-1 font-mono uppercase tracking-wide">Date</p>
            <p className="text-foreground font-medium text-white">March 14th, 2026</p>
          </div>
          <div>
            <p className="text-sm mb-1 font-mono uppercase tracking-wide">Duration</p>
            <p className="text-foreground font-medium text-white">9 AM – 9 PM</p>
          </div>
          <div>
            <p className="text-sm mb-1 font-mono uppercase tracking-wide">Free</p>
            <p className="font-medium text-white">Register on Eventbrite</p>
          </div>
        </div>
      </div>
    </section>
  )
}
