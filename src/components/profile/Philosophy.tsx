import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="relative px-6 py-40 md:px-12 md:py-56 lg:px-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_8%,transparent),transparent_60%)]"
      />
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="mx-auto mb-10 h-px w-20 bg-gold/70"
        />
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl leading-[1.25] font-light text-ivory md:text-5xl lg:text-6xl"
        >
          <span className="text-gold">“</span>The future of energy belongs to
          organizations capable of integrating{" "}
          <span className="italic text-gold/95">operational excellence</span>,
          innovation, sustainability, and{" "}
          <span className="italic text-gold/95">disciplined execution</span>.
          <span className="text-gold">”</span>
        </motion.blockquote>
        <div className="mt-12 text-[0.72rem] tracking-[0.3em] text-ivory/60 uppercase">
          — Suresh Vaidyanathan
        </div>
      </div>
    </section>
  );
}
