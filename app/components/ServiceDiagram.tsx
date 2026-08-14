import styles from "./ServiceDiagram.module.css";

type DiagramNode = {
  label: string;
  Icon: React.ComponentType;
};

const POSITIONS = [
  { nodeX: 140, nodeY: 110, d: "M140,110 Q245,170 350,250", delay: "0s" },
  { nodeX: 560, nodeY: 110, d: "M560,110 Q455,170 350,250", delay: "0.6s" },
  { nodeX: 140, nodeY: 390, d: "M140,390 Q245,330 350,250", delay: "1.2s" },
  { nodeX: 560, nodeY: 390, d: "M560,390 Q455,330 350,250", delay: "1.8s" },
];

export default function ServiceDiagram({
  centerIcon,
  nodes,
}: {
  centerIcon: React.ReactNode;
  nodes: DiagramNode[];
}) {
  const items = nodes.slice(0, 4).map((node, i) => ({ ...node, ...POSITIONS[i] }));

  return (
    <div className={styles.wrap}>
      <svg viewBox="0 0 700 500" className={styles.svg} aria-hidden="true">
        {items.map((item) => (
          <path key={item.label} d={item.d} className={styles.flowLine} />
        ))}

        {items.map((item) => (
          <circle
            key={`dot-${item.label}`}
            r={5}
            className={styles.signalDot}
            style={{
              offsetPath: `path('${item.d}')`,
              animationDelay: item.delay,
            }}
          />
        ))}

        <circle cx="350" cy="250" r="70" className={styles.hubGlow} />
        <circle cx="350" cy="250" r="54" className={styles.hubCircle} />
      </svg>

      <div className={styles.hubIcon} style={{ left: "50%", top: "50%" }}>
        {centerIcon}
      </div>

      {items.map((item) => (
        <div
          key={`node-${item.label}`}
          className={styles.deviceNode}
          style={{
            left: `${(item.nodeX / 700) * 100}%`,
            top: `${(item.nodeY / 500) * 100}%`,
          }}
        >
          <span className={styles.deviceIcon}>
            <item.Icon />
          </span>
          <span className={styles.deviceLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
