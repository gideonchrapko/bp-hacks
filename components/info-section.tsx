"use client"

import { Button } from "@/components/ui/button"
import { Laptop, Car, UtensilsCrossed, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { EVENTBRITE_URL } from "@/lib/constants"

export function InfoSection() {
  return (
    <section id="info" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - General Info */}
          <div>
            <p className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">
              General Info
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              What you need to know
            </h2>

            {/* About the Hackathon */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3">About the Hackathon</h3>
              <p className="body-copy">
                Join us for a one-day, in-person hackathon where participants will design and build creative, useful agents using <strong>Botpress</strong>. Whether you&apos;re a student or a recent graduate, this event is a chance to experiment, collaborate, and ship something real — all in a single day.
              </p>
            </div>

            {/* Location */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location
              </h3>
              <p className="body-copy font-medium">875 Bd Charest O, Suite 200</p>
              <p className="body-copy">Québec City, QC G1N 3N8, Canada</p>
            </div>

            {/* Parking */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Car className="h-5 w-5" />
                Parking
              </h3>
              <ul className="body-copy list-disc list-inside space-y-1">
                <li>Free parking available at <strong>875 Boulevard Charest Ouest</strong></li>
                <li>Street parking available nearby</li>
              </ul>
            </div>

            {/* Food & Drinks */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5" />
                Food & Drinks
              </h3>
              <ul className="body-copy list-disc list-inside space-y-1">
                <li>Coffee available throughout the day</li>
                <li>Light snacks in the morning (please eat before arriving)</li>
                <li>Lunch and dinner provided</li>
                <li>Participants with dietary restrictions may bring their own food</li>
              </ul>
            </div>

            {/* What to Bring */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Laptop className="h-5 w-5" />
                What to Bring
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Required</p>
                  <ul className="body-copy list-disc list-inside">
                    <li>Laptop</li>
                    <li>Laptop charger</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Strongly Recommended</p>
                  <ul className="body-copy list-disc list-inside space-y-1">
                    <li>Headphones</li>
                    <li>Any adapters or dongles you may need</li>
                    <li>
                      A <Link href="https://sso.botpress.cloud/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:opacity-80">Botpress workspace</Link> created in advance
                    </li>
                    <li>
                      <Link href="https://botpress.com/docs/adk/quickstart" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:opacity-80">Botpress ADK</Link> installed locally
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Optional but Helpful</p>
                  <ul className="body-copy list-disc list-inside">
                    <li>Mouse / keyboard</li>
                    <li>Reusable water bottle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration CTA */}
          <div className="lg:sticky lg:top-8">
            <div className="p-8 md:p-10 rounded-lg bg-[#AAE1A1]">
              <p className="text-sm font-mono mb-4 tracking-widest uppercase">
                Registration
              </p>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Ready to compete?</h3>
              <p className="body-copy mb-8">
                Registration is free and should be done individually via Eventbrite. Participants may form teams on-site.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-black">
                  <span className="font-bold">Event Date</span>
                  <span className="font-medium">March 14th, 2026</span>
                </div>
                <div className="flex justify-between py-3 border-b border-black">
                  <span className="font-bold">Time</span>
                  <span className="font-medium">9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between py-3 border-b border-black">
                  <span className="font-bold">Team Size</span>
                  <span className="font-medium">3–4 people (register individually)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-black">
                  <span className="font-bold">Registration Fee</span>
                  <span className="font-medium">Free</span>
                </div>
              </div>

              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                <Link href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer">
                  Register on Eventbrite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
