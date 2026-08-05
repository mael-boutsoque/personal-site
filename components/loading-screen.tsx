"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ShimmerProgress from "@/components/shadcn-space/progress/progress-04";

const MIN_DISPLAY_MS = 2400;
const SESSION_KEY = "site:v3:loaded";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const alreadyShown = () => {
      try {
        return window.sessionStorage.getItem(SESSION_KEY) === "1";
      } catch {
        return false;
      }
    };

    if (alreadyShown()) {
      setDone(true);
      return;
    }

    let faded = false;
    const start = performance.now();
    const finish = () => {
      if (faded) return;
      faded = true;
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => {
        setDone(true);
        try {
          window.sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* ignore */
        }
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => window.removeEventListener("load", finish);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ShimmerProgress speed="medium" className="border-none shadow-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;