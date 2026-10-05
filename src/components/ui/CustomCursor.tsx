import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices with a precise pointer (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    setIsFinePointer(true);

    const move = (e: MouseEvent) => {
      // Offset by 12px to center the 24x24px cursor
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a link, button, or explicit role="button"
      const isClickable = target.closest('a, button, [role="button"]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isFinePointer) return null;

  return (
    <>
      <style>
        {`
          /* Hide default cursor on interactive elements and their children */
          a, button, [role="button"],
          a *, button *, [role="button"] * {
            cursor: none !important;
          }
        `}
      </style>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-6 w-6 items-center justify-center rounded-full border border-copper bg-transparent"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: isHovering ? 1 : 0.5,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: [0.16, 1, 0.3, 1], // Quiet Power standard ease
        }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-copper" />
      </motion.div>
    </>
  );
}
