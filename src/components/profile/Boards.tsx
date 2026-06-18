import { motion } from "framer-motion";
import { Building2, Cpu, HeartPulse, type LucideIcon } from "lucide-react";
import boardroomImg from "@/assets/boardroom.jpg";

type Role = {
  org: string;
  role: string;
  icon: LucideIcon;
};

const roles: Role[] = [
  { org: "Novonix Limited", role: "Board Member", icon: Building2 },
  { org: "Aspen Technology", role: "Advisory Board Member", icon: Cpu },
  { org: "Access Life America", role: "Advisory Board Member", icon: HeartPulse },
];

export function Boards() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-44 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-20 overflow-hidden border border-ivory/10"
        >
          <img
            src={boardroomImg}
            alt="Executive boardroom overlooking a city skyline at blue hour"
            loading="lazy"
            width={1600}
            height={900}
            className="aspect-[21/9] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/40 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-end p-8 md:p-14">
            <div className="eyebrow mb-5">Governance & Advisory</div>
            <h2 className="font-display text-4xl leading-tight font-light text-ivory md:text-5xl">
              Strategic governance.
              <br />
              <span className="italic text-gold">Long-term value.</span>
            </h2>
          </div>
        </motion.figure>

        <p className="mb-16 max-w-xl text-base leading-relaxed text-ivory/70">
          Active board and advisory contributions across publicly listed and
          high-growth enterprises — guiding innovation, governance, and
          long-horizon value creation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {roles.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className={`border-t border-ivory/15 py-10 md:py-12 ${
                  i > 0 ? "md:border-l md:pl-10" : "md:pr-10"
                } ${i < roles.length - 1 ? "md:pr-10" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
                    {String(i + 1).padStart(2, "0")} / Role
                  </div>
                  <Icon size={22} strokeWidth={1.2} className="text-gold/60" aria-hidden />
                </div>
                <div className="mt-5 font-display text-2xl leading-tight font-light text-ivory md:text-3xl">
                  {r.org}
                </div>
                <div className="mt-3 text-sm tracking-wide text-ivory/65">
                  {r.role}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
