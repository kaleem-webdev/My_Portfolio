import type { Project } from "@/data/site";

/**
 * Generic placeholder previews drawn in SVG. They are NOT screenshots of real
 * work. Give a project an `image` in src/data/site.ts to replace them.
 */
const A = "#d9480f";
const INK = "#161514";
const LINE = "#e7e2da";
const SOFT = "#fff0e6";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 250"
      role="img"
      aria-label="Placeholder project preview"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="250" fill="#f3efe8" />
      <rect x="28" y="26" width="344" height="214" rx="12" fill="#fff" stroke={LINE} />
      <path d="M28 38a12 12 0 0 1 12-12h320a12 12 0 0 1 12 12v14H28z" fill="#faf8f5" stroke={LINE} />
      <circle cx="44" cy="39" r="3.5" fill="#ff5f57" />
      <circle cx="56" cy="39" r="3.5" fill="#febc2e" />
      <circle cx="68" cy="39" r="3.5" fill="#28c840" />
      <rect x="150" y="33" width="100" height="12" rx="6" fill={LINE} />
      {children}
    </svg>
  );
}

function Web() {
  return (
    <Frame>
      <rect x="48" y="68" width="150" height="12" rx="6" fill={INK} />
      <rect x="48" y="88" width="110" height="12" rx="6" fill={INK} />
      <rect x="48" y="112" width="130" height="6" rx="3" fill={LINE} />
      <rect x="48" y="124" width="100" height="6" rx="3" fill={LINE} />
      <rect x="48" y="146" width="56" height="20" rx="10" fill={A} />
      <rect x="232" y="68" width="120" height="84" rx="10" fill={SOFT} />
      <circle cx="292" cy="110" r="22" fill={A} opacity=".85" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={48 + i * 104} y="182" width="94" height="42" rx="8" fill="#faf8f5" stroke={LINE} />
          <rect x={58 + i * 104} y="192" width="40" height="6" rx="3" fill={INK} />
          <rect x={58 + i * 104} y="204" width="62" height="5" rx="2.5" fill={LINE} />
        </g>
      ))}
    </Frame>
  );
}

function Dashboard() {
  const bars = [34, 52, 28, 64, 46, 72, 58];
  return (
    <Frame>
      <rect x="28" y="52" width="58" height="188" fill="#faf8f5" stroke={LINE} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="40" y={70 + i * 22} width="34" height="7" rx="3.5" fill={i === 0 ? A : LINE} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={100 + i * 90} y="66" width="82" height="42" rx="8" fill="#faf8f5" stroke={LINE} />
          <rect x={110 + i * 90} y="76" width="30" height="5" rx="2.5" fill={LINE} />
          <rect x={110 + i * 90} y="88" width="46" height="9" rx="3" fill={i === 0 ? A : INK} />
        </g>
      ))}
      <rect x="100" y="120" width="262" height="108" rx="8" fill="#faf8f5" stroke={LINE} />
      {bars.map((h, i) => (
        <rect key={i} x={118 + i * 34} y={216 - h} width="20" height={h} rx="4" fill={i === 5 ? A : "#d8d1c4"} />
      ))}
    </Frame>
  );
}

function Pos() {
  return (
    <Frame>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x={48 + (i % 3) * 66} y={66 + Math.floor(i / 3) * 74} width="58" height="66" rx="8" fill="#faf8f5" stroke={LINE} />
          <rect x={54 + (i % 3) * 66} y={72 + Math.floor(i / 3) * 74} width="46" height="30" rx="5" fill={i === 1 ? SOFT : "#efeae1"} />
          <rect x={54 + (i % 3) * 66} y={108 + Math.floor(i / 3) * 74} width="34" height="5" rx="2.5" fill={INK} />
          <rect x={54 + (i % 3) * 66} y={118 + Math.floor(i / 3) * 74} width="22" height="5" rx="2.5" fill={A} />
        </g>
      ))}
      <rect x="258" y="66" width="104" height="160" rx="10" fill="#faf8f5" stroke={LINE} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="268" y={80 + i * 22} width="52" height="6" rx="3" fill={INK} />
          <rect x="330" y={80 + i * 22} width="24" height="6" rx="3" fill={LINE} />
        </g>
      ))}
      <rect x="268" y="196" width="84" height="22" rx="11" fill={A} />
    </Frame>
  );
}

function Wordpress() {
  return (
    <Frame>
      <rect x="28" y="52" width="344" height="22" fill="#faf8f5" stroke={LINE} />
      <rect x="44" y="59" width="42" height="8" rx="4" fill={INK} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={250 + i * 38} y="60" width="28" height="6" rx="3" fill={LINE} />
      ))}
      <rect x="28" y="74" width="344" height="76" fill={SOFT} />
      <rect x="52" y="92" width="160" height="12" rx="6" fill={INK} />
      <rect x="52" y="112" width="110" height="7" rx="3.5" fill={LINE} />
      <rect x="52" y="128" width="50" height="14" rx="7" fill={A} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={44 + i * 112} y="162" width="100" height="56" rx="8" fill="#faf8f5" stroke={LINE} />
          <rect x={54 + i * 112} y="174" width="56" height="6" rx="3" fill={INK} />
          <rect x={54 + i * 112} y="188" width="78" height="5" rx="2.5" fill={LINE} />
          <rect x={54 + i * 112} y="200" width="64" height="5" rx="2.5" fill={LINE} />
        </g>
      ))}
    </Frame>
  );
}

function Api() {
  return (
    <svg
      viewBox="0 0 400 250"
      role="img"
      aria-label="Placeholder project preview"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="250" fill="#1b1a18" />
      <rect x="28" y="26" width="344" height="214" rx="12" fill="#161514" stroke="#ffffff22" />
      <circle cx="44" cy="42" r="3.5" fill="#ff5f57" />
      <circle cx="56" cy="42" r="3.5" fill="#febc2e" />
      <circle cx="68" cy="42" r="3.5" fill="#28c840" />
      <rect x="44" y="64" width="34" height="14" rx="4" fill={A} />
      <rect x="86" y="68" width="150" height="6" rx="3" fill="#ffffff55" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={56 + (i % 2) * 20}
          y={98 + i * 20}
          width={[120, 90, 150, 70, 110, 80][i]}
          height="6"
          rx="3"
          fill={i % 3 === 0 ? "#ffd8a8" : "#ffffff33"}
        />
      ))}
      <rect x="266" y="64" width="90" height="26" rx="13" fill="#1f3d27" />
      <rect x="282" y="73" width="58" height="8" rx="4" fill="#8ce99a" />
    </svg>
  );
}

const map = { web: Web, dashboard: Dashboard, pos: Pos, wordpress: Wordpress, api: Api };

export function ProjectThumb({ type }: { type: Project["thumb"] }) {
  const C = map[type];
  return <C />;
}
