export type Product = {
  slug: string;
  name: string;
  image: string;
  tagline: string;
  shortDesc: string;
  overview: string[];
  features: string[];
  specs: [string, string][];
};

export const products: Product[] = [
  {
    slug: "antivirus-pro",
    name: "SiyanoAV Antivirus Pro",
    image: "/product-antivirus-pro.png",
    tagline: "Fast, lightweight protection for everyday devices.",
    shortDesc:
      "Core real-time antivirus protection that's fast, lightweight and always up to date against malware and everyday threats.",
    overview: [
      "SiyanoAV Antivirus Pro runs quietly in the background, scanning files and downloads in real time so threats get caught before they reach your device.",
      "It's built to stay light on system resources, so your computer keeps running at full speed while you're protected.",
      "Virus definitions update automatically, keeping you covered against new malware as it appears.",
    ],
    features: [
      "Real-time virus & malware scanning",
      "Automatic threat database updates",
      "Low system resource usage",
      "Scheduled and on-demand scans",
      "USB & removable media protection",
    ],
    specs: [
      ["Platform", "Windows 10 / 11"],
      ["License options", "1, 3 or 5 devices"],
      ["Update frequency", "Automatic, daily"],
      ["Support", "Email & phone support"],
    ],
  },
  {
    slug: "internet-security",
    name: "SiyanoAV Internet Security",
    image: "/product-internet-security.png",
    tagline: "Everyday antivirus, plus safer browsing online.",
    shortDesc:
      "Adds secure browsing, safe connections and privacy protection on top of core antivirus defense.",
    overview: [
      "SiyanoAV Internet Security includes everything in Antivirus Pro, then adds a layer of protection for the time you spend online.",
      "Secure browsing tools flag risky sites and downloads before they can do damage, while connection protection helps keep your data private on public and home networks alike.",
      "It's a practical step up for anyone who banks, shops or works online regularly.",
    ],
    features: [
      "Everything in Antivirus Pro",
      "Secure browsing & site protection",
      "Safe connection monitoring",
      "Anti-phishing protection",
      "Privacy & webcam protection",
    ],
    specs: [
      ["Platform", "Windows 10 / 11"],
      ["License options", "1, 3 or 5 devices"],
      ["Update frequency", "Automatic, daily"],
      ["Support", "Email & phone support"],
    ],
  },
  {
    slug: "total-security",
    name: "SiyanoAV Total Security",
    image: "/product-total-security.png",
    tagline: "Complete protection for your whole household.",
    shortDesc:
      "Complete protection with real-time threat defense, ransomware & phishing protection and secure browsing in one suite.",
    overview: [
      "SiyanoAV Total Security is the complete package — combining real-time antivirus, internet security and additional ransomware and phishing defenses in a single suite.",
      "It's designed for households and small businesses that want one straightforward subscription covering every device, without juggling multiple tools.",
      "Round-the-clock protection runs in the background, with alerts only when something actually needs your attention.",
    ],
    features: [
      "Everything in Internet Security",
      "Ransomware & phishing defense",
      "Multi-device protection",
      "Firewall & network protection",
      "Priority support",
    ],
    specs: [
      ["Platform", "Windows 10 / 11"],
      ["License options", "3, 5 or 10 devices"],
      ["Update frequency", "Automatic, daily"],
      ["Support", "Priority email & phone support"],
    ],
  },
];
