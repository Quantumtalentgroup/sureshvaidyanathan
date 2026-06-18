import { motion } from "framer-motion";

const contacts = [
  { label: "Based in", value: "Houston, Texas" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sureshvaidyanathan",
    href: "https://www.linkedin.com/",
  },
  {
    label: "Direct",
    value: "vaidyanath@hotmail.com",
    href: "mailto:vaidyanath@hotmail.com",
  },
];

export function Closing() {
  return (
    <section className="relative px-6 pt-32 pb-12 md:px-12 md:pt-44 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="eyebrow mb-6">Availability</div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display text-5xl leading-[1.02] font-light text-ivory md:text-7xl"
            >
              Building the
              <br />
              <span className="italic text-gold">future of energy.</span>
            </motion.h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
              Open to board appointments, strategic advisory opportunities,
              executive leadership discussions, and transformative energy
              initiatives.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="space-y-px overflow-hidden border-y border-ivory/10 bg-ivory/10">
              {contacts.map((c) => {
                const Inner = (
                  <div className="flex items-baseline justify-between gap-6 bg-navy-deep px-2 py-6 transition-colors duration-300 hover:bg-navy md:px-4 md:py-7">
                    <span className="text-[0.7rem] tracking-[0.28em] text-ivory/55 uppercase">
                      {c.label}
                    </span>
                    <span className="font-display text-lg text-ivory group-hover:text-gold md:text-xl">
                      {c.value}
                    </span>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group block"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} className="group">
                    {Inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 space-y-3">
              <div className="text-[0.7rem] tracking-[0.28em] text-ivory/45 uppercase">
                Documents
              </div>
              <a
                href="/documents/resume.pdf"
                download
                className="group flex items-center gap-3 text-ivory transition-colors hover:text-gold"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-ivory/55 group-hover:text-gold transition-colors"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="font-display text-base">Download Resume</span>
              </a>
              <a
                href="/documents/executive-bio.pdf"
                download
                className="group flex items-center gap-3 text-ivory transition-colors hover:text-gold"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-ivory/55 group-hover:text-gold transition-colors"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="font-display text-base">Download Executive Bio</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-32 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-8 text-[0.7rem] tracking-[0.22em] text-ivory/45 uppercase md:flex-row md:items-center">
          <div>Suresh Vaidyanathan</div>
          <div>EVP · Renewable Fuels, Emerging Energy & Aviation</div>
          <div>© {new Date().getFullYear()}</div>
        </footer>
      </div>
    </section>
  );
}
