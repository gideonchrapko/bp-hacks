import { Clock } from "lucide-react"

export function AgendaSection() {
  const schedule = [
    {
      time: "9:00 AM",
      title: "Introduction & Welcome",
      description:
        "Opening ceremony, team formation, challenge briefing, and judging criteria overview.",
      duration: "1 hour",
    },
    {
      time: "10:00 AM",
      title: "Hacking Begins",
      description:
        "Start building your Discord agent using the Botpress ADK. Technical staff will be available for support.",
      duration: "2 hours",
    },
    {
      time: "12:00 PM",
      title: "Lunch Break",
      description:
        "Cold lunches provided (wraps, sandwiches, etc.). Snacks and drinks available throughout the day.",
      duration: "1 hour",
    },
    {
      time: "6:00 PM",
      title: "Dinner Break",
      description: "Pizza dinner. Refuel for the final stretch!",
      duration: "1 hour",
    },
    {
      time: "9:00 PM",
      title: "Presentations & Awards",
      description:
        "Submit your YouTube video, Discord agent link, and GitHub repo. Winners announced!",
      duration: "End",
    },
  ]

  return (
    <section id="agenda" className="py-24 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">Schedule</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Event Agenda
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-6">
            {schedule.map((item) => (
              <div key={item.time} className="relative flex gap-6 md:gap-10 group">
                {/* Timeline dot */}
                <div className="hidden md:flex shrink-0 w-14 h-14 rounded-full bg-background border-2 border-border items-center justify-center z-10 group-hover:border-accent/50 transition-colors">
                  <Clock className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="p-6 rounded-xl border border-border bg-background hover:border-muted-foreground/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <span className="inline-flex items-center gap-2 text-accent font-mono font-semibold">
                        <Clock className="h-4 w-4 md:hidden" />
                        {item.time}
                      </span>
                      <span className="hidden md:inline text-muted-foreground">
                        &bull;
                      </span>
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
