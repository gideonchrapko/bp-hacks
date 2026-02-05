"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { EVENTBRITE_URL } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Purple image container - same max-width as content (max-w-7xl) */}
      <div className="absolute z-0 top-[80px] left-0 right-0 bottom-[30px] px-[30px]">
        <div className="max-w-7xl mx-auto h-full rounded-[15px] overflow-hidden shadow-none bg-hero-container bg-hero-pattern bg-repeat bg-auto" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image
              src="/images/bp-hacks.svg"
              alt="BP Hacks"
              width={140}
              height={40}
              className="h-5 w-auto"
            />
            <div className="hidden md:flex items-center gap-6 text-sm ">
              <a href="#prizes" className="hover:text-foreground transition-colors">Prizes</a>
              <a href="#info" className="hover:text-foreground transition-colors">Info</a>
              <a href="#agenda" className="hover:text-foreground transition-colors">Schedule</a>
              <a href="#judging" className="hover:text-foreground transition-colors">Judging</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </div>
          </div>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
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
          <p className="body-copy max-w-2xl mx-auto mb-12 bg-hero-container">
            Join us for a one-day, in-person hackathon in Québec City. Design and build creative agents with Botpress — all in a single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              <Link href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer">
                Register on Eventbrite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-hero-container border border-black hover:bg-hero-container-dark hover:text-black">
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
