"use client"

import { Button } from "@/components/ui/button"
import { Laptop, Car, Cookie, MapPin, ArrowRight } from "lucide-react"

export function InfoSection() {
  const infoItems = [
    {
      icon: Laptop,
      title: "Bring Your Laptop & Charger",
      description:
        "Make sure to bring your own laptop and charger. We'll provide Wi-Fi and power outlets.",
    },
    {
      icon: Car,
      title: "Parking Available",
      description:
        "Parking is available at the QC office. Details will be shared closer to the event.",
    },
    {
      icon: Cookie,
      title: "No Breakfast Provided",
      description:
        "Breakfast is not included -- only light snacks in the morning. Please eat before arriving. Lunch and dinner will be provided.",
    },
    {
      icon: MapPin,
      title: "QC Office",
      description: "The hackathon takes place at the Botpress QC office. Full address will be shared upon registration.",
    },
  ]

  return (
    <section id="info" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <p className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">
              General Info
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              What you need to know
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Everything you need to prepare for the event. Make sure to review
              this information before the big day.
            </p>

            <div className="grid gap-6">
              {infoItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-5 rounded-lg border border-border bg-card hover:border-muted-foreground/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Registration CTA */}
          <div className="lg:sticky lg:top-8">
            <div className="p-8 md:p-10 rounded-lg bg-[#AAE1A1]">
              <p className="text-sm font-mono mb-4 tracking-widest uppercase">
                Registration
              </p>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Ready to compete?</h3>
              <p className="mb-8 leading-relaxed">
                Spots are limited to 100 participants. Register now to secure your
                place at the hackathon.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-black">
                  <span className="text-muted-foreground">Event Date</span>
                  <span className="font-medium">March 14, 2026</span>
                </div>
                <div className="flex justify-between py-3 border-b border-black">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between py-3 border-b border-black">
                  <span className="text-muted-foreground">Registration Fee</span>
                  <span className="font-medium">Free</span>
                </div>
              </div>

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                Register on Eventbrite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
