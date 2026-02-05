"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Will food be provided?",
      answer:
        "Lunch (cold lunches like wraps and sandwiches) and dinner (pizza) will be provided. Breakfast is not included -- only light snacks will be available in the morning, so please eat before you arrive. Snacks and drinks (water, soda, energy drinks, coffee, protein bars) will be available throughout the day.",
    },
    {
      question: "Who can participate?",
      answer:
        "The hackathon is open to developers, students, and anyone interested in building AI agents with Botpress. All skill levels are welcome -- this is a great opportunity to learn the ADK and build something real.",
    },
    {
      question: "How many participants per team?",
      answer:
        "Teams can have up to 4 members. You can come with a pre-formed team or find teammates during the team formation session at the start of the event.",
    },
    {
      question: "How will the projects be judged?",
      answer:
        "Judging criteria will be shared at the start of the event. Submissions will include a YouTube video demo, a live Discord agent link, and your GitHub repository. A panel of judges will evaluate each project.",
    },
    {
      question: "How much does it cost to register?",
      answer:
        "Registration is completely free. Just sign up on Eventbrite to secure your spot. Capacity is limited to 100 participants, so register early!",
    },
  ]

  return (
    <section id="faq" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16">
          {/* Left Column - Title */}
          <div>
            <p className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Frequently asked questions
            </h2>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-accent py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
