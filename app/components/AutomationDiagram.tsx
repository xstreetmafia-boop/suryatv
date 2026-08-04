import styles from "./AutomationDiagram.module.css";

function LightIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.45 1.1 1.2 1.1 2.2h5c0-1 .5-1.75 1.1-2.2A6 6 0 0 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="8" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 11.5 21 9v6l-5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="9.5" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ThermostatIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7 V12 L15 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TvIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 21h6M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HubIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
      <path d="M4 20 L4 11 L12 4 L20 11 L20 20 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 20 V14 H15 V20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 8 a5.6 5.6 0 0 1 8 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const connections = [
  {
    id: "light",
    d: "M140,110 Q245,170 350,250",
    nodeX: 140,
    nodeY: 110,
    label: "Lighting",
    Icon: LightIcon,
    delay: "0s",
  },
  {
    id: "camera",
    d: "M560,110 Q455,170 350,250",
    nodeX: 560,
    nodeY: 110,
    label: "Security",
    Icon: CameraIcon,
    delay: "0.6s",
  },
  {
    id: "thermostat",
    d: "M140,390 Q245,330 350,250",
    nodeX: 140,
    nodeY: 390,
    label: "Climate",
    Icon: ThermostatIcon,
    delay: "1.2s",
  },
  {
    id: "tv",
    d: "M560,390 Q455,330 350,250",
    nodeX: 560,
    nodeY: 390,
    label: "Entertainment",
    Icon: TvIcon,
    delay: "1.8s",
  },
];

export default function AutomationDiagram() {
  return (
    <div className={styles.wrap}>
      <svg viewBox="0 0 700 500" className={styles.svg} aria-hidden="true">
        {connections.map((c) => (
          <path key={c.id} d={c.d} className={styles.flowLine} />
        ))}

        {connections.map((c) => (
          <circle
            key={`dot-${c.id}`}
            r={5}
            className={styles.signalDot}
            style={{
              offsetPath: `path('${c.d}')`,
              animationDelay: c.delay,
            }}
          />
        ))}

        <circle cx="350" cy="250" r="70" className={styles.hubGlow} />
        <circle cx="350" cy="250" r="54" className={styles.hubCircle} />
      </svg>

      <div
        className={styles.hubIcon}
        style={{ left: "50%", top: "50%" }}
      >
        <HubIcon />
      </div>

      {connections.map((c) => (
        <div
          key={`node-${c.id}`}
          className={styles.deviceNode}
          style={{
            left: `${(c.nodeX / 700) * 100}%`,
            top: `${(c.nodeY / 500) * 100}%`,
          }}
        >
          <span className={styles.deviceIcon}>
            <c.Icon />
          </span>
          <span className={styles.deviceLabel}>{c.label}</span>
        </div>
      ))}
    </div>
  );
}
