import { ContactItem } from "./contact-info.types";
import mail from "~shared/image/contact-info/mail.png";
import map from "~shared/image/contact-info/map-pin.png";
import phone from "~shared/image/contact-info/phone.png";

export const CONTACT_ITEMS: ContactItem[] = [
  {
    id: "1",
    icon: phone,
    title: "Телефон",
    value: "+996 707 379 957",
    link: "tel:+996707379957",
  },
  {
    id: "2",
    icon: map,
    title: "Адрес",
    value: "Кыргызстан, г. Бишкек, ул. Анкара 1/17",
  },
  {
    id: "3",
    icon: mail,
    title: "Email",
    value: "comtehno.kg@gmail.com",
    link: "mailto:comtehno.kg@gmail.com",
  },
];
