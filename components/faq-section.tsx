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
      question: "Who can participate?",
      answer:
        "Anyone — all skill levels are welcome (including CEGEP students and new grads).",
    },
    {
      question: "How many people per team?",
      answer:
        "Teams of 3–4 people, but please enter individually.",
    },
    {
      question: "Will food be provided?",
      answer:
        "Yes. Light snacks in the morning, lunch, dinner, and coffee throughout the day.",
    },
    {
      question: "Do I need to prepare anything in advance?",
      answer:
        "If possible, please create a Botpress workspace and install the Botpress ADK on your machine before the event to save time.",
    },
    {
      question: "What if I can't make it to the Québec City hackathon?",
      answer:
        "No worries! If you can't attend the Québec City hackathon, we'll be hosting similar events in Montréal and online in the near future, and you'll be able to join us there instead.",
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
                  <AccordionContent className="body-copy pb-6">
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
