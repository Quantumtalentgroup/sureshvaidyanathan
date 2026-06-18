import { motion } from "framer-motion";

type Props = {
  label?: string;
};

export function SectionDivider({ label }: Props) {
  return (
    <div
      aria-hidden={!label}
      className="relative mx-auto flex w-full max-w-6xl items-center gap-6 px-6 md:px-12 lg:px-20"
    >
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left center" }}
        className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        className="text-gold shrink-0"
      >
        <path
          d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
      </svg>
      {label ? (
        <span className="text-[0.65rem] tracking-[0.32em] text-ivory/40 uppercase">
          {label}
        </span>
      ) : null}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "right center" }}
        className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
    </div>
  );
}
