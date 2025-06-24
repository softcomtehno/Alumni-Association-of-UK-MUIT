import { GalleryItem } from "./photo-gallery.types";
import img1 from "./img/Frame 46.png";
import img2 from "./img/Frame 47.png";
import img3 from "./img/Frame 48.png";
import img4 from "./img/Frame 49.png";
import img5 from "./img/Frame 50.png";
import img6 from "./img/Frame 51.png";
import img7 from "./img/Frame 52.png";
import img8 from "./img/Frame 53.png";
import img9 from "./img/Frame 54.png";
import img10 from "./img/Frame 55.png";

export const MOCK_GALLERY: GalleryItem[] = [
  {
    id: "1",
    imageUrl: img1,
    title: "Открытие IT-лаборатории",
    subtitle:
      "Современное пространство для практических занятий по программированию",
    tags: ["IT", "2023", "лаборатория"],
  },
  {
    id: "2",
    imageUrl: img2,
    title: "Хакатон студентов",
    subtitle: "24 часа непрерывной работы над инновационными проектами",
    tags: ["хакатон", "2024", "соревнования"],
  },
  {
    id: "3",
    imageUrl: img3,
    title: "Форум будущего",
    subtitle: "Встреча с IT-лидерами и обсуждение трендов индустрии",
    tags: ["форум", "2024", "IT"],
  },
  {
    id: "4",
    imageUrl: img4,
    title: "День открытых дверей",
    subtitle: "Презентация программ обучения и экскурсия по колледжу",
    tags: ["абитуриенты", "2023", "колледж"],
  },
  {
    id: "5",
    imageUrl: img5,
    title: "Выпускной колледжа",
    subtitle: "Торжественная церемония награждения выпускников",
    tags: ["выпускной", "2023", "колледж"],
  },
  {
    id: "6",
    imageUrl: img6,
    title: "Проектная выставка",
    subtitle: "Демонстрация лучших студенческих IT-проектов",
    tags: ["выставка", "2023", "IT"],
  },
  {
    id: "7",
    imageUrl: img7,
    title: "Мастер-класс по дизайну",
    subtitle: "Основы UI/UX для начинающих",
    tags: ["дизайн", "2023", "мастер-класс"],
  },
  {
    id: "8",
    imageUrl: img8,
    title: "IT-карьера",
    subtitle: "Встреча студентов с представителями ведущих IT-компаний",
    tags: ["карьера", "2024", "IT"],
  },
  {
    id: "9",
    imageUrl: img9,
    title: "Соревнования по робототехнике",
    subtitle: "Турнир по управлению роботами для студентов",
    tags: ["робототехника", "2023", "соревнования"],
  },
  {
    id: "10",
    imageUrl: img10,
    title: "Кибербезопасность",
    subtitle: "Лекция и тренинг по защите информации",
    tags: ["кибербезопасность", "2024", "IT"],
  },
];
