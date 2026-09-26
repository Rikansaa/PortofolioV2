"use client";

import { useEffect } from "react";

export default function SplineMouseFollow() {
  useEffect(() => {
    function handleMove(event: PointerEvent) {
      const canvas = document.querySelector(".spline-robot-wrapper canvas");
      if (!canvas) return;

      const forwarded = new PointerEvent("pointermove", {
        clientX: event.clientX,
        clientY: event.clientY,
        pointerId: event.pointerId,
        pointerType: event.pointerType || "mouse",
        bubbles: true,
        cancelable: true
      });
      canvas.dispatchEvent(forwarded);
    }

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return null;
}
