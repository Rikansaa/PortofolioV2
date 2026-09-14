"use client";

import Lanyard from "@/components/lanyard/lanyard";

export default function LanyardScene() {
  return (
    <div className="h-full w-full cursor-grab active:cursor-grabbing">
      <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} fov={20} />
    </div>
  );
}