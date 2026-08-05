"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import ShimmerProgress from "@/components/shadcn-space/progress/progress-04";

const MIN_DISPLAY_MS = 2200;
const SESSION_KEY = "site:v3:loaded";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [barDone, setBarDone] = useState(false);

  const handleComplete = useCallback(() => setBarDone(true), []);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === "1") {
        setBarDone(true);
        setDone(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Fade out once the progress bar reaches 100% AND the window has loaded
  // AND a minimum display time has elapsed.
  useEffect(() => {
    if (!barDone) return;

    let windowLoaded = document.readyState === "complete";
    let minElapsed = false;

    const hide = () => {
      if (windowLoaded && minElapsed) setDone(true);
    };

    const onLoad = () => {
      windowLoaded = true;
      hide();
    };

    if (!windowLoaded) window.addEventListener("load", onLoad);
    const minTimer = setTimeout(() => {
      minElapsed = true;
      hide();
    }, MIN_DISPLAY_MS);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(minTimer);
    };
  }, [barDone]);

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
          <ShimmerProgress
            duration={1500}
            onComplete={handleComplete}
            className="border-none shadow-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;