import { Institution } from "./educational-institutions.types";
import comtehnoIcon from "~shared/image/comtehno-icon.png";
import muitIcon from "~shared/image/muit-icon.png";
import kiteIcon from "~shared/image/kite-icon.png";
export const INSTITUTIONS: Institution[] = [
  {
    id: "1",
    icon: comtehnoIcon,
    name: "Бишкекский колледж компьютерных систем и технологий",
    colorClass: "#00443C",
    socialLinks: {
      instagram: "https://instagram.com/bkct",
      whatsApp: "https://wa.me/996555123456",
    },
  },
  {
    id: "2",
    icon: muitIcon,
    colorClass: "#00956E",
    name: "Международный университет инновационных технологий",

    socialLinks: {
      instagram: "https://instagram.com/muit",
      whatsApp: "https://wa.me/996555654321",
    },
  },
  {
    id: "3",
    icon: kiteIcon,
    colorClass: "#2A2172",
    name: "Колледж инновационных технологий и экономики",
    socialLinks: {
      instagram: "https://instagram.com/kite",
      whatsApp: "https://wa.me/996555789012",
    },
  },
];
