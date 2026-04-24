/**
 * TECH NETWORK SVG - Decorative background
 * 
 * SVG decorativo con servidores, nodos y conexiones
 * para la sección hero
 */

export default function TechNetworkSVG() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
      {/* Central Server Rack */}
      <g>
        <rect x="150" y="150" width="100" height="200" fill="#1a1a2e" stroke="#ff4d4d" strokeWidth="2" rx="4" />
        <circle cx="200" cy="200" r="8" fill="#00d4ff" opacity="0.8" />
        <circle cx="200" cy="250" r="8" fill="#ff4d4d" opacity="0.8" />
        <circle cx="200" cy="300" r="8" fill="#00d4ff" opacity="0.8" />
      </g>
      {/* Left Server */}
      <g>
        <rect x="50" y="200" width="70" height="120" fill="#1a1a2e" stroke="#00d4ff" strokeWidth="1.5" rx="3" />
        <circle cx="85" cy="230" r="5" fill="#00d4ff" opacity="0.7" />
      </g>
      {/* Right Server */}
      <g>
        <rect x="280" y="200" width="70" height="120" fill="#1a1a2e" stroke="#00d4ff" strokeWidth="1.5" rx="3" />
        <circle cx="315" cy="230" r="5" fill="#00d4ff" opacity="0.7" />
      </g>
      {/* Connection Lines */}
      <line x1="120" y1="260" x2="150" y2="250" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
      <line x1="250" y1="250" x2="280" y2="260" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
      {/* Floating nodes */}
      <circle cx="100" cy="100" r="4" fill="#00d4ff" opacity="0.6" />
      <circle cx="300" cy="120" r="4" fill="#00d4ff" opacity="0.6" />
      <circle cx="80" cy="400" r="4" fill="#ff4d4d" opacity="0.5" />
      <circle cx="320" cy="420" r="4" fill="#ff4d4d" opacity="0.5" />
    </svg>
  );
}
