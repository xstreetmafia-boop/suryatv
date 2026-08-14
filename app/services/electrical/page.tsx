import ServicePageTemplate from "../../components/ServicePageTemplate";
import {
  BoltIcon,
  BulbIcon,
  PlugIcon,
  GearIcon,
} from "../../components/ServiceIcons";

export default function ElectricalPage() {
  return (
    <ServicePageTemplate
      eyebrow="Electrical Services"
      heading="The Power Behind Every System You Rely On"
      subtext="Safe, compliant electrical work is the foundation everything else runs on. Here's how we handle projects of every size."
      centerIcon={<BoltIcon />}
      nodes={[
        { label: "Lighting", Icon: BulbIcon },
        { label: "Panels & Sockets", Icon: PlugIcon },
        { label: "Industrial Wiring", Icon: GearIcon },
        { label: "Maintenance", Icon: BoltIcon },
      ]}
      steps={[
        {
          num: "01",
          title: "We assess & design",
          text: "Our engineers review your property and design an electrical layout that meets code and supports your current and future needs.",
        },
        {
          num: "02",
          title: "We install with precision",
          text: "From industrial wiring to residential panels, every installation is carried out with safety and compliance as the top priority.",
        },
        {
          num: "03",
          title: "We maintain & support",
          text: "Ongoing maintenance keeps your electrical infrastructure running safely, efficiently and ready to support smart technology.",
        },
      ]}
      ctaHeading="Have an electrical project in mind?"
    />
  );
}
