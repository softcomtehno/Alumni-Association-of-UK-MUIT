import { Alumni } from "./alumni.types";
import Ormon from "./img/Ormon.jpg";
import maksat from "./img/maksat.png";
import ramzan from "./img/ramzan.png";
import akai from "./img/Акай.jpg";
import Ahmed from "./img/Ахмед.jpg";
import danyu from "./img/Даня.jpg";
import Kuma from "./img/Кума.png";

export const ALUMNI_DATA: Alumni[] = [
  {
    id: "1",
    imageUrl: Ormon,
    name: "Ормон Мамбеткулов",
    institution: "КОМТЕХНО",
    graduationYear: 2025,
    gpa: 9.5,
    specialization: "ПОАС",
    description:
      "Разработчик программного обеспечения с опытом работы в крупных IT-компаниях. Специализируюсь на веб-разработке и мобильных приложениях.",
    contacts: {
      linkedIn: "#",
      email: "example@email.com",
    },
  },
  {
    id: "2",
    imageUrl: danyu,
    name: "Эрнистов Данил",
    institution: "КОМТЕХНО",
    graduationYear: 2025,
    gpa: 8.7,
    specialization: "ПОАС",
    description:
      "Специалист в области информационных систем с интересом к разработке корпоративного ПО и баз данных. Участвовал в нескольких научных проектах.",
    contacts: {
      linkedIn: "#",
      email: "example@email.com",
    },
  },
  {
    id: "3",
    imageUrl: maksat,
    name: "Каныбеков Максат",
    institution: "МУИТ",
    graduationYear: 2018,
    gpa: 8.3,
    specialization: "ПОВТ",
    description:
      "Эксперт по кибербезопасности, специализируюсь на защите информационных систем и анализе уязвимостей. Опыт работы с системами контроля доступа.",
    contacts: {
      linkedIn: "#",
      email: "example@email.com",
    },
  },
  {
    id: "4",
    imageUrl: akai,
    name: "Акай",
    institution: "КОМТЕХНО",
    graduationYear: 2020,
    gpa: 8.0,
    specialization: "Сетевые ПОВТ",
    description:
      "Специалист по проектированию и обслуживанию компьютерных сетей. Активно занимается настройкой и оптимизацией сетевой инфраструктуры.",
    contacts: {
      linkedIn: "#",
      email: "example@email.com",
    },
  },
  {
    id: "5",
    imageUrl: Kuma,
    name: "Кума",
    institution: "КИТЭ",
    graduationYear: 2015,
    gpa: 8.5,
    specialization: "ПОВТ",
    description:
      "Мобильный разработчик с опытом создания приложений для iOS и Android. Увлекается UX/UI дизайном и оптимизацией производительности приложений.",
    contacts: {
      linkedIn: "#",
      email: "example@email.com",
    },
  },
  {
    id: "6",
    imageUrl: Ahmed,
    name: "Сартов Ахмед",
    institution: "МУИТ",
    graduationYear: 2022,
    gpa: 9.0,
    specialization: "ПИ",
    description:
      "Инженер по машинному обучению, работаю с нейронными сетями и алгоритмами анализа данных. Участвовал в разработке систем прогнозирования.",
    contacts: {
      linkedIn: "#",
      email: "example@email.com",
    },
  },
  {
    id: "7",
    imageUrl: ramzan,
    name: "Рамзан",
    institution: "КИТЭ",
    graduationYear: 2023,
    gpa: 7.8,
    specialization: "ПИ",
    description:
      "Фронтенд-разработчик с акцентом на современный JavaScript и React. Опыт в создании адаптивных и доступных веб-приложений.",
    contacts: {
      linkedIn: "#",
      email: "example@email.com",
    },
  },
];
