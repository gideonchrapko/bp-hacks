import Image from "next/image"

export function PrizeSection() {
  const prizes = [
    {
      title: "$500 CAD",
      description: "Cash prize awarded to the winning team.",
      accent: false,
      backgroundImage: "/images/cash-prize.png",
    },
    {
      title: "Botpress Credits",
      description: "BP credits for the top-performing teams to keep building.",
      accent: false,
      backgroundImage: "/images/bp-credits.png",
    },
    {
      title: "Swag",
      description: "Exclusive hackathon swag for participants.",
      accent: false,
      backgroundImage: "/images/trophy.png",
    },
  ]

  return (
    <section id="prizes" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">Rewards</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            $500 CAD + Botpress Credits + Swag
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {prizes.map((prize) => (
            <div
              key={prize.title}
              className={`overflow-hidden flex flex-col ${
                prize.backgroundImage
                  ? "rounded-lg border border-border"
                  : "rounded-xl " + (prize.accent ? "bg-accent/5" : "bg-background")
              }`}
            >
              {prize.backgroundImage ? (
                <>
                  <div className="relative w-full aspect-[4/3] shrink-0">
                    <Image
                      src={prize.backgroundImage}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 bg-background">
                    <p className={`text-2xl mb-2 ${prize.accent ? "text-accent" : "text-foreground"}`}>
                      {prize.title}
                    </p>
                    <p className="body-copy">{prize.description}</p>
                  </div>
                </>
              ) : (
                <div className="relative p-8">
                  <p className={`text-2xl font-bold mb-3 ${prize.accent ? "text-accent" : "text-foreground"}`}>
                    {prize.title}
                  </p>
                  <p className="body-copy">{prize.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl flex min-h-[320px] overflow-hidden bg-merch-bg">
          <div className="relative w-1/3 shrink-0 min-h-[320px]">
            <Image
              src="/images/merch.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="33vw"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center p-10">
            <p className="text-2xl text-foreground mb-2">Merch for everyone</p>
            <p className="body-copy">
              All participants will receive exclusive hackathon swag.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
