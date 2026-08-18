import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { label: "AI / ML", x: 300, y: 70 },
  { label: "Computer Vision", x: 520, y: 220 },
  { label: "Full Stack", x: 440, y: 470 },
  { label: "Medical AI", x: 160, y: 470 },
  { label: "Cybersecurity", x: 80, y: 220 },
];

const center = { x: 300, y: 300 };

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 600 600"
      className="h-full w-full"
      role="img"
      aria-label="Diagram connecting AI, computer vision, full-stack development, medical AI and cybersecurity into a single product core"
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* connecting lines */}
      {nodes.map((node) => (
        <line
          key={`line-${node.label}`}
          x1={center.x}
          y1={center.y}
          x2={node.x}
          y2={node.y}
          stroke="var(--color-border-strong)"
          strokeWidth={1}
        />
      ))}

      {/* animated pulse traveling each connection */}
      {!shouldReduceMotion &&
        nodes.map((node, i) => (
          <motion.circle
            key={`pulse-${node.label}`}
            r={3}
            fill="var(--color-accent)"
            initial={{ cx: center.x, cy: center.y, opacity: 0 }}
            animate={{
              cx: [center.x, node.x],
              cy: [center.y, node.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: nodes.length * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* core */}
      <circle cx={center.x} cy={center.y} r={90} fill="url(#coreGlow)" />
      <circle
        cx={center.x}
        cy={center.y}
        r={34}
        fill="var(--color-bg)"
        stroke="var(--color-accent)"
        strokeWidth={1.5}
        className="dark:fill-[var(--color-bg-dark)]"
      />
      <text
        x={center.x}
        y={center.y + 5}
        textAnchor="middle"
        className="fill-ink font-tag dark:fill-ink-dark"
        style={{ fontSize: 11, letterSpacing: "0.05em" }}
      >
        PRODUCT
      </text>

      {/* outer nodes */}
      {nodes.map((node) => (
        <g key={node.label}>
          <circle
            cx={node.x}
            cy={node.y}
            r={5}
            fill="var(--color-bg)"
            stroke="var(--color-accent)"
            strokeWidth={1.5}
            className="dark:fill-[var(--color-bg-dark)]"
          />
          <text
            x={node.x}
            y={node.y > center.y ? node.y + 24 : node.y - 16}
            textAnchor="middle"
            className="fill-muted font-tag dark:fill-muted-dark"
            style={{ fontSize: 11, letterSpacing: "0.04em" }}
          >
            {node.label.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}
