"use client";

import { useEffect, useState } from "react";
import { RobotSceneOnly } from "@/components/ui/robot-hero";

export default function ResponsiveRobot() {
  const [showRobot, setShowRobot] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setShowRobot(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setShowRobot(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!showRobot) {
    return null;
  }

  return (
    <RobotSceneOnly
      color="#e4e4e7"
      scale={1.5}
      pantallaColor="#f4f4f5"
      pantallaBrillo={1.1}
      blinkCycle={3.5}
      metalness={0.05}
    />
  );
}
