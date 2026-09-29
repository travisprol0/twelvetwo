"use client";

import { motion, useReducedMotion } from "motion/react";

const nodes = [
  { index: "01", label: "Problem" },
  { index: "02", label: "Architecture" },
  { index: "03", label: "Software" },
  { index: "04", label: "Production" },
];

export function SystemDiagram() {
  const reduce = useReducedMotion();

  return (
    <figure className="border border-line bg-inset/70 p-5 sm:p-6" aria-label="System flow from problem to production">
      <figcaption className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
        <span>System / 01</span>
        <span>Flow</span>
      </figcaption>
      <ol className="mt-6 space-y-0">
        {nodes.map((node, index) => (
          <li key={node.label}>
            <div className="flex items-center gap-4 border border-line bg-canvas px-4 py-3">
              <span className="font-mono text-[11px] text-brass">{node.index}</span>
              <span className="text-sm tracking-[-0.01em] text-ink">{node.label}</span>
            </div>
            {index < nodes.length - 1 ? (
              <div className="flex h-6 justify-start pl-[1.35rem]" aria-hidden="true">
                <motion.span
                  className="block w-px origin-top bg-brass/80"
                  initial={reduce ? false : { scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.45, delay: 0.25 + index * 0.18, ease: "easeOut" }}
                />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-5 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
        Architecture → Implementation → Production
      </p>
    </figure>
  );
}
