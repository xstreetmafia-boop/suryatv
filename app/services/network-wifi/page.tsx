import ServicePageTemplate from "../../components/ServicePageTemplate";
import {
  RouterIcon,
  LaptopIcon,
  SmartphoneIcon,
  CctvIcon,
} from "../../components/ServiceIcons";

export default function NetworkWifiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Network & WiFi"
      heading="One Strong Signal, Every Room, Every Device"
      subtext="From fiber to full mesh coverage, here's how we build network infrastructure that keeps your home or business connected without dead zones."
      centerIcon={<RouterIcon />}
      nodes={[
        { label: "Laptops", Icon: LaptopIcon },
        { label: "Smartphones", Icon: SmartphoneIcon },
        { label: "Security Cameras", Icon: CctvIcon },
        { label: "Smart Devices", Icon: RouterIcon },
      ]}
      steps={[
        {
          num: "01",
          title: "We assess your space",
          text: "We map out your property to identify dead zones and plan optimal router, mesh node and cabling placement.",
        },
        {
          num: "02",
          title: "We install & configure",
          text: "Fiber optics, structured cabling and D-Link Wi-Fi 6 mesh systems are installed and configured for maximum coverage and speed.",
        },
        {
          num: "03",
          title: "You stay connected",
          text: "AI-powered self-optimization, WPA3 security and reliable coverage keep every device online — from laptops to security cameras.",
        },
      ]}
      ctaHeading="Ready for stronger WiFi?"
    />
  );
}
