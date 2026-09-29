"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { primaryNav } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { Availability } from "./Availability";
import { WordmarkLink } from "./Wordmark";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-canvas"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-6 px-5 sm:h-[4.5rem] sm:px-8">
        <WordmarkLink />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <span className="hidden xl:inline">
            <Availability />
          </span>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brass px-3.5 py-2 text-sm font-medium text-brass-ink transition-colors hover:bg-[#d4b67a]"
          >
            Start a Project
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-canvas md:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex h-full flex-col px-5 pt-8" aria-label="Mobile">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-5 text-3xl tracking-[-0.03em] text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex h-12 items-center justify-center bg-brass text-base font-medium text-brass-ink"
              >
                Start a Project
              </Link>
              <Availability className="mt-8" />
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
