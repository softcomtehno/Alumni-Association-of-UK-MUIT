import { Globe, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ReactNode } from "react";
import { Container, Typography } from "~shared/ui";
import { FooterLinks } from "./ui/footerLinks";

interface FooterLinkItem {
  id: number;
  linkTitle: string;
  icon?: ReactNode;
}

export interface FooterSection {
  title: string;
  data: FooterLinkItem[];
}

export const Footer = () => {
  const footerLinks: FooterSection[] = [
    {
      title: "Контакты",
      data: [
        {
          id: 1,
          icon: <MapPin color="gray" />,
          linkTitle: "Кыргызстан, г. Бишкек, ул. Анкара 1/17",
        },
        {
          id: 2,
          icon: <Phone color="gray" />,
          linkTitle: "+996 707 379 957",
        },
        {
          id: 3,
          icon: <Mail color="gray" />,
          linkTitle: "comtehno.kg@gmail.com",
        },
      ],
    },
    {
      title: "Ссылки",
      data: [
        {
          id: 1,
          linkTitle: "Главная",
        },
        {
          id: 2,
          linkTitle: "О нас",
        },
        {
          id: 3,
          linkTitle: "Новости",
        },
        {
          id: 4,
          linkTitle: "Выпускники",
        },
        {
          id: 5,
          linkTitle: "Контакты",
        },
      ],
    },
    {
      title: "График работы",
      data: [
        {
          id: 1,
          linkTitle: "ПН – ПТ 07:30–17:00",
        },
        {
          id: 2,
          linkTitle: "СБ – ВС Выходной",
        },
      ],
    },
  ];

  return (
    <Container>
      <div className="max-w-[360px] mb-10">
        <Typography variant="h4" className="text-[#2563EB] mb-3">
          Ассоциация выпускников
        </Typography>
        <p>
          Объединение выпускников Университетскогокомплекса Международно
          гоуниверситета инновационных технологий
        </p>
      </div>
      <div className="flex justify-between border-b-1 pb-10 mb-10">
        <div className="flex gap-16">
          {footerLinks.map((item, index) => (
            <FooterLinks key={index} title={item.title} data={item.data} />
          ))}
        </div>
        <div>
          <Typography variant="h4" className="text-[#2563EB] mb-3">
            Учебные заведения
          </Typography>
          <div className="rounded-[12px] overflow-hidden w-62">
            {["МУИТ", "КОМТЕХНО", "КИТЭ"].map((item, index) => (
              <div
                className="flex justify-between border-b-1 last:border-0 bg-[#DAE7F3] py-2.5 px-3 w-full"
                key={index}
              >
                <Typography variant="span">{item}</Typography>
                <div className="flex gap-x-3">
                  <Globe />
                  <Phone />
                  <Instagram />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Typography variant="span" className="text-[#6F7684]">
        © 2025 Ассоциация выпускников Университетского комплекса МУИТ. Все
        права защищены.
      </Typography>
    </Container>
  );
};
