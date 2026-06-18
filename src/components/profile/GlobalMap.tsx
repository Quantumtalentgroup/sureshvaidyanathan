import { motion } from "framer-motion";

// Approximate region coordinates in a 1600x800 equirectangular space
const regions = [
  { name: "North America", x: 360, y: 320 },
  { name: "Europe", x: 820, y: 280 },
  { name: "Middle East", x: 950, y: 380 },
  { name: "Asia", x: 1180, y: 380 },
];

const arcs = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3 },
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 3 },
];

function arcPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  curve = 0.35,
) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const nx = -dy;
  const ny = dx;
  const len = Math.hypot(nx, ny) || 1;
  const cx = mx + (nx / len) * Math.hypot(dx, dy) * curve;
  const cy = my + (ny / len) * Math.hypot(dx, dy) * curve - 80;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

// Dotted-grid landmass approximation
function landDots() {
  const dots: { x: number; y: number }[] = [];
  const masses: Array<[number, number, number, number]> = [
    // x1, y1, x2, y2 (rough rectangles for continents)
    [120, 200, 480, 470], // N. America
    [380, 470, 540, 660], // S. America
    [720, 220, 900, 470], // Europe / N. Africa
    [820, 470, 980, 660], // Africa
    [900, 320, 1100, 460], // ME / Central Asia
    [1080, 240, 1380, 470], // Asia
    [1280, 520, 1400, 620], // Australia
  ];
  const step = 18;
  for (let x = 0; x < 1600; x += step) {
    for (let y = 0; y < 800; y += step) {
      for (const [x1, y1, x2, y2] of masses) {
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
          // slight irregularity
          const n = Math.sin(x * 0.13) * Math.cos(y * 0.11);
          if (n > -0.7) dots.push({ x, y });
          break;
        }
      }
    }
  }
  return dots;
}

const DOTS = landDots();

export function GlobalMap() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-44 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow mb-5">Global Leadership</div>
            <h2 className="font-display text-4xl leading-tight font-light text-ivory md:text-5xl">
              Operating across
              <span className="italic text-gold"> four continents</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70">
              International business transformation spanning North America,
              Europe, Asia, and the Middle East — leading complex, cross-border
              operations and capital programs at enterprise scale.
            </p>
          </div>

          <div className="md:col-span-7">
            <svg
              viewBox="0 0 1600 800"
              className="h-auto w-full"
              role="img"
              aria-labelledby="map-title"
            >
              <title id="map-title">
                Global leadership across North America, Europe, Asia, and the
                Middle East
              </title>

              {DOTS.map((d, i) => (
                <circle
                  key={i}
                  cx={d.x}
                  cy={d.y}
                  r={1.4}
                  fill="oklch(0.985 0.005 90)"
                  fillOpacity={0.35}
                />
              ))}

              {arcs.map((a, i) => {
                const from = regions[a.from];
                const to = regions[a.to];
                const d = arcPath(from.x, from.y, to.x, to.y);
                return (
                  <motion.path
                    key={i}
                    d={d}
                    fill="none"
                    stroke="oklch(0.78 0.105 80)"
                    strokeWidth={1}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.85 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: i * 0.3, ease: "easeInOut" }}
                  />
                );
              })}

              {regions.map((r, i) => (
                <g key={r.name}>
                  <motion.circle
                    cx={r.x}
                    cy={r.y}
                    r={16}
                    fill="oklch(0.78 0.105 80)"
                    fillOpacity={0.15}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.4, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.4 + i * 0.15 }}
                    style={{ transformOrigin: `${r.x}px ${r.y}px` }}
                  />
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r={4}
                    fill="oklch(0.78 0.105 80)"
                  />
                  <text
                    x={r.x + 18}
                    y={r.y + 5}
                    fill="oklch(0.985 0.005 90)"
                    fillOpacity={0.85}
                    fontSize={20}
                    fontFamily="Inter Tight, sans-serif"
                    fontWeight={500}
                    letterSpacing={1.5}
                  >
                    {r.name.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
