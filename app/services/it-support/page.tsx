import ServicePageTemplate from "../../components/ServicePageTemplate";
import {
  ServerIcon,
  ShieldIcon,
  ChartIcon,
  WrenchIcon,
} from "../../components/ServiceIcons";

export default function ItSupportPage() {
  return (
    <ServicePageTemplate
      eyebrow="Managed IT"
      heading="IT Support That Catches Problems Before You Do"
      subtext="Proactive monitoring, cybersecurity and hands-on maintenance — here's what it looks like when your systems are actually taken care of."
      centerIcon={<ServerIcon />}
      nodes={[
        { label: "Monitoring", Icon: ChartIcon },
        { label: "Cybersecurity", Icon: ShieldIcon },
        { label: "Maintenance", Icon: WrenchIcon },
        { label: "Support", Icon: ServerIcon },
      ]}
      steps={[
        {
          num: "01",
          title: "We monitor your systems",
          text: "Ongoing monitoring keeps an eye on your systems, flagging issues before they cause downtime.",
        },
        {
          num: "02",
          title: "We protect your systems",
          text: "Cybersecurity measures are put in place and kept up to date, protecting your business from evolving threats.",
        },
        {
          num: "03",
          title: "We maintain & support",
          text: "Regular maintenance and responsive support mean small issues get fixed before they become expensive problems.",
        },
      ]}
      ctaHeading="Want IT that's actually taken care of?"
    />
  );
}
