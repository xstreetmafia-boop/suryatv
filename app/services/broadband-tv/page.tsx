import ServicePageTemplate from "../../components/ServicePageTemplate";
import {
  DishIcon,
  TvIcon,
  RouterIcon,
  SmartphoneIcon,
} from "../../components/ServiceIcons";

export default function BroadbandTvPage() {
  return (
    <ServicePageTemplate
      eyebrow="Broadband & TV"
      heading="Fast Internet and Digital TV, Delivered Locally"
      subtext="High-speed broadband and digital IPTV, with dedicated service in the Bolghatty area."
      centerIcon={<DishIcon />}
      nodes={[
        { label: "Digital TV", Icon: TvIcon },
        { label: "Router", Icon: RouterIcon },
        { label: "Mobile Devices", Icon: SmartphoneIcon },
        { label: "Broadband", Icon: DishIcon },
      ]}
      steps={[
        {
          num: "01",
          title: "We connect your property",
          text: "High-speed broadband is installed and configured for reliable, fast internet across your home or business.",
        },
        {
          num: "02",
          title: "We set up digital TV",
          text: "Digital IPTV is configured to deliver clear, reliable channels alongside your broadband connection.",
        },
        {
          num: "03",
          title: "We support you locally",
          text: "As a dedicated local provider in the Bolghatty area, support is always close by when you need it.",
        },
      ]}
      ctaHeading="Ready to get connected?"
    />
  );
}
