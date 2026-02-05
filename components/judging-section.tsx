import { Award } from "lucide-react"

export function JudgingSection() {
  const criteria = [
    { name: "Creativity" },
    { name: "Technical complexity" },
    { name: "Usefulness" },
  ]

  return (
    <section id="judging" className="py-24 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">
            Judging
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Judging Criteria
          </h2>
        </div>
        <p className="body-copy mb-8 max-w-2xl">
          Projects will be evaluated based on:
        </p>
        <ul className="flex flex-col gap-4">
          {criteria.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background"
            >
              <Award className="h-5 w-5 text-accent shrink-0" />
              <span className="text-lg font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
