import Spline from "@splinetool/react-spline/next";

export default function SplineRobot() {
  return (
    <div className="spline-robot-wrapper pointer-events-none fixed inset-0 z-20 flex h-full w-full items-center justify-center">
      <Spline
        scene="https://prod.spline.design/czzuNfs3tQxeJplz/scene.splinecode"
      />
    </div>
  );
}
