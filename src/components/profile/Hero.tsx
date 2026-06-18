import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "$3B+", label: "Capital Projects Led" },
  { value: "$500M+", label: "Margin Improvement Delivered" },
  { value: "$700M+", label: "Annual Operational Benefits" },
  { value: "20+", label: "Years Global Leadership" },
];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate flex min-h-screen w-full flex-col justify-between overflow-hidden px-6 pt-28 pb-12 md:px-12 lg:px-20">
      <BackgroundArt reduce={!!reduce} />

      <header className="relative z-10 flex items-center justify-between">
        <div className="font-display text-base tracking-tight text-ivory/90">
          SV
        </div>
        <div className="eyebrow text-gold/80">Executive Profile</div>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow mb-6">Executive Vice President</div>
          <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] font-light text-ivory">
            Suresh
            <br />
            <span className="italic text-ivory/95">Vaidyanathan</span>
          </h1>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-2xl"
        >
          <div className="mb-5 h-px w-16 bg-gold/70" />
          <p className="text-lg leading-relaxed text-ivory/85 md:text-xl">
            Renewable Fuels, Emerging Energy & Aviation. Driving global energy
            transformation through renewable innovation, operational
            excellence, and enterprise-scale leadership.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden border-t border-b border-ivory/10 bg-ivory/10 md:grid-cols-4"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-navy-deep px-5 py-7 md:px-8 md:py-9"
          >
            <div className="font-display text-3xl font-light text-gold md:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-[0.72rem] tracking-[0.18em] text-ivory/65 uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function BackgroundArt({ reduce }: { reduce: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--navy-soft)_70%,transparent),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--gold)_8%,transparent),transparent_55%)]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        role="img"
      >
        <title>Abstract energy infrastructure</title>
        <defs>
          <linearGradient id="gline" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.105 80)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.78 0.105 80)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.78 0.105 80)" stopOpacity="0" />
          </linearGradient>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="oklch(0.985 0.005 90)"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1600" height="900" fill="url(#grid)" />

        {/* Distant refinery silhouette */}
        <g
          stroke="oklch(0.985 0.005 90)"
          strokeOpacity="0.35"
          strokeWidth="1"
          fill="none"
        >
          <path d="M 0 720 L 120 720 L 130 660 L 160 660 L 165 700 L 220 700 L 230 600 L 260 600 L 268 700 L 340 700 L 350 640 L 400 640 L 410 700 L 520 700 L 530 580 L 580 580 L 590 700 L 700 700 L 712 660 L 800 660 L 808 700 L 920 700 L 932 600 L 990 600 L 1000 700 L 1120 700 L 1130 640 L 1200 640 L 1212 700 L 1340 700 L 1352 580 L 1410 580 L 1420 700 L 1600 700" />
          <path d="M 130 660 L 130 600 M 230 600 L 230 540 M 350 640 L 350 580 M 530 580 L 530 510 M 712 660 L 712 600 M 932 600 L 932 540 M 1130 640 L 1130 580 M 1352 580 L 1352 510" />
          <circle cx="230" cy="540" r="6" />
          <circle cx="530" cy="510" r="6" />
          <circle cx="932" cy="540" r="6" />
          <circle cx="1352" cy="510" r="6" />
        </g>

        {/* Flow lines */}
        {[180, 320, 460, 600].map((y, i) => (
          <motion.line
            key={y}
            x1="-200"
            x2="1800"
            y1={y}
            y2={y - 40}
            stroke="url(#gline)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.6 }
                : { pathLength: [0, 1, 1], opacity: [0, 0.7, 0] }
            }
            transition={{
              duration: 9,
              delay: i * 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
