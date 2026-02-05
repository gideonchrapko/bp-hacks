import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/bp-hacks.svg"
              alt="BP Hacks"
              width={120}
              height={36}
              className="h-5 w-auto"
            />
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#prizes" className="hover:text-foreground transition-colors">Prizes</a>
            <a href="#info" className="hover:text-foreground transition-colors">Info</a>
            <a href="#agenda" className="hover:text-foreground transition-colors">Schedule</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 BP Hacks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
