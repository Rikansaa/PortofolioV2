import Spline from "@splinetool/react-spline/next";

export default function SplineRobot() {
  return (
    <div className="spline-robot-wrapper h-full w-full">
      <Spline
        scene="https://prod.spline.design/kNv8LxltNsZN1PKF/scene.splinecode"
        style={{ width: "100%", height: "100%", background: "transparent" }}
      />
    </div>
  );
}
