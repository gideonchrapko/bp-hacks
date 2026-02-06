import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Contact */}
        <div>
          <p className="text-sm font-semibold mb-2">Contact</p>
          <p className="body-copy text-sm">
            Logistical questions?{" "}
            <a href="mailto:mathilde.beaudoin@botpress.com" className="underline text-accent hover:opacity-80">
              mathilde.beaudoin@botpress.com
            </a>
            <br />
            Technical questions?{" "}
            <a href="mailto:nathaniel.girard@botpress.com" className="underline text-accent hover:opacity-80">
              nathaniel.girard@botpress.com
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Link href="/" className="block">
              <Image
                src="/images/bp-hacks.svg"
                alt="BP Hacks"
                width={120}
                height={36}
                className="h-5 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#prizes" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">Prizes</a>
            <a href="#info" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">Info</a>
            <a href="#agenda" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">Schedule</a>
            <a href="#judging" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">Judging</a>
            <a href="#faq" className="hover:text-foreground hover:opacity-60 transition-colors transition-opacity">FAQ</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 BP Hacks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
