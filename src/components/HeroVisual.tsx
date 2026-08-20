import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

interface SkillNode {
  label: string;
  x: number;
  y: number;
  target: string;
}

const nodes: SkillNode[] = [
  {
    label: "AI / ML",
    x: 300,
    y: 70,
    target: "#work",
  },
  {
    label: "Computer Vision",
    x: 520,
    y: 220,
    target: "#work",
  },
  {
    label: "Full Stack",
    x: 440,
    y: 470,
    target: "#experience",
  },
  {
    label: "Medical AI",
    x: 160,
    y: 470,
    target: "#work",
  },
  {
    label: "Cybersecurity",
    x: 80,
    y: 220,
    target: "#work",
  },
];

const center = { x: 300, y: 300 };

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleNodeClick = (target: string) => {
    document.querySelector(target)?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <svg
      viewBox="0 0 600 600"
      className="h-full w-full"
      role="img"
      aria-label="Interactive diagram connecting AI, computer vision, full-stack development, medical AI and cybersecurity"
    >
      <defs>
        <radialGradient
          id="coreGlow"
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop
            offset="0%"
            stopColor="var(--color-accent)"
            stopOpacity="0.35"
          />

          <stop
            offset="100%"
            stopColor="var(--color-accent)"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      {/* Connecting lines */}
      {nodes.map((node) => (
        <line
          key={`line-${node.label}`}
          x1={center.x}
          y1={center.y}
          x2={node.x}
          y2={node.y}
          stroke="var(--color-border-strong)"
          strokeWidth={activeNode === node.label ? 1.8 : 1}
          opacity={
            activeNode && activeNode !== node.label
              ? 0.45
              : 1
          }
        />
      ))}

      {/* Animated pulses */}
      {!shouldReduceMotion &&
        nodes.map((node, index) => (
          <motion.circle
            key={`pulse-${node.label}`}
            r={3}
            fill="var(--color-accent)"
            initial={{
              cx: center.x,
              cy: center.y,
              opacity: 0,
            }}
            animate={{
              cx: [center.x, node.x],
              cy: [center.y, node.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.4,
              delay: index * 0.5,
              repeat: Infinity,
              repeatDelay: nodes.length * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Core glow */}
      <circle
        cx={center.x}
        cy={center.y}
        r={90}
        fill="url(#coreGlow)"
      />

      {/* Core */}
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
        style={{
          fontSize: 11,
          letterSpacing: "0.05em",
        }}
      >
        PRODUCT
      </text>

      {/* Interactive skill nodes */}
      {nodes.map((node) => {
        const isActive = activeNode === node.label;

        return (
          <g
            key={node.label}
            role="button"
            tabIndex={0}
            aria-label={`Explore ${node.label}`}
            onMouseEnter={() => setActiveNode(node.label)}
            onMouseLeave={() => setActiveNode(null)}
            onFocus={() => setActiveNode(node.label)}
            onBlur={() => setActiveNode(null)}
            onClick={() => handleNodeClick(node.target)}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" ||
                event.key === " "
              ) {
                event.preventDefault();
                handleNodeClick(node.target);
              }
            }}
            className="cursor-pointer outline-none"
          >
            {/* Larger invisible hit area */}
            <circle
              cx={node.x}
              cy={node.y}
              r={24}
              fill="transparent"
            />

            {/* Node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={isActive ? 7 : 5}
              fill="var(--color-bg)"
              stroke="var(--color-accent)"
              strokeWidth={isActive ? 2 : 1.5}
              className="dark:fill-[var(--color-bg-dark)]"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: isActive ? 1.15 : 1,
                    }
              }
              transition={{
                duration: 0.2,
              }}
            />

            {/* Label */}
            <text
              x={node.x}
              y={
                node.y > center.y
                  ? node.y + 24
                  : node.y - 16
              }
              textAnchor="middle"
              className={`font-tag transition-opacity ${
                isActive
                  ? "fill-ink dark:fill-ink-dark"
                  : "fill-muted dark:fill-muted-dark"
              }`}
              style={{
                fontSize: isActive ? 11.5 : 11,
                letterSpacing: "0.04em",
              }}
            >
              {node.label.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}