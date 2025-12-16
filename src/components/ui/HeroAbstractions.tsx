/*
  Static 3D Abstractions - Portal Style
  
  Concentric ring/torus shapes clustered around 
  the hero text area for depth and visual interest.
*/

// Portal-like torus shape with multiple concentric rings
function PortalShape({
  className,
  rotation = 0,
  rings = 1,
}: {
  className?: string;
  rotation?: number;
  rings?: number;
}) {
  const ringElements = [];
  for (let i = 0; i < rings; i++) {
    const rx = 50 - i * 8;
    const ry = 20 - i * 4;
    if (rx > 0 && ry > 0) {
      ringElements.push(
        <ellipse
          key={i}
          cx="60"
          cy="40"
          rx={rx}
          ry={ry}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5 - i * 0.2}
        />
      );
    }
  }
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {ringElements}
    </svg>
  );
}

// Larger portal with more rings
function LargePortalShape({
  className,
  rotation = 0,
}: {
  className?: string;
  rotation?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <ellipse
        cx="100"
        cy="60"
        rx="90"
        ry="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="100"
        cy="60"
        rx="75"
        ry="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <ellipse
        cx="100"
        cy="60"
        rx="60"
        ry="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <ellipse
        cx="100"
        cy="60"
        rx="45"
        ry="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <ellipse
        cx="100"
        cy="60"
        rx="30"
        ry="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

export default function HeroAbstractions() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Main large portal behind the text - centered */}
      <LargePortalShape
        className="absolute w-[500px] md:w-[700px] lg:w-[900px] text-[#1a4d2e] opacity-[0.1]"
        rotation={-5}
      />

      {/* Secondary portal - offset upper left */}
      <div className="absolute top-[28%] left-1/2 -translate-x-[65%] md:-translate-x-[55%]">
        <PortalShape
          className="w-44 md:w-60 lg:w-72 text-[#8a7355] opacity-[0.12]"
          rotation={18}
          rings={4}
        />
      </div>

      {/* Third portal - offset lower right */}
      <div className="absolute top-[58%] left-1/2 translate-x-[25%] md:translate-x-[45%]">
        <PortalShape
          className="w-40 md:w-52 lg:w-64 text-[#8a7355] opacity-[0.11]"
          rotation={-15}
          rings={4}
        />
      </div>
    </div>
  );
}
