// features/hero/lib/constants.ts
import { HeroContent } from "../model/types";

export const HERO_CONTENT: Record<string, HeroContent> = {
  "/": {
    title: "Ассоциация выпускников Университетского комплекса МУИТ",
    description:
      "Объединяем выпускников, создаем возможности, поддерживаем сообщество профессионалов",
    background:
      "linear-gradient(270deg,#43D0C9_37.94%,#2563EB_100%),linear-gradient(270deg,rgba(37,99,235,0)_0%,#2563EB_87.5%)",
    showButtons: true,
    primaryButton: {
      text: "Присоединитесь",
      link: "/join",
    },
    secondaryButton: {
      text: "Узнать больше",
      link: "/about",
    },
  },
  "/news": {
    title: "Новости и события",
    description:
      "Будьте в курсе последних новостей и предстоящих мероприятий Ассоциации выпускников и Университетского комплекса МУИТ",
    background:
      "linear-gradient(270deg,#43D0C9_37.94%,#2563EB_100%),linear-gradient(270deg,rgba(37,99,235,0)_0%,#2563EB_87.5%)",
    showButtons: false,
  },
  "/graduates": {
    title: "Выпускники",
    description:
      "Познакомьтесь с выпускниками Университетского комплекса МУИТ. Используйте фильтры для поиска одногруппников или коллег",
    background:
      "linear-gradient(270deg,#43D0C9_37.94%,#2563EB_100%),linear-gradient(270deg,rgba(37,99,235,0)_0%,#2563EB_87.5%)",
    showButtons: false,
  },
  "/about": {
    title: "О нас",
    description:
      "Ассоциация выпускников Университетского комплекса    МУИТ — это сообщество профессионалов, объединенных общей alma mater и стремлением к развитию и сотрудничеству",
    background:
      "linear-gradient(270deg,#43D0C9_37.94%,#2563EB_100%),linear-gradient(270deg,rgba(37,99,235,0)_0%,#2563EB_87.5%)",
    showButtons: false,
  },
  "/contacts": {
    title: "Контакты",
    description:
      "У вас есть вопросы или предложения? Свяжитесь с нами любым удобным способом или воспользуйтесь формой обратной связи.",
    background:
      "linear-gradient(270deg,#43D0C9_37.94%,#2563EB_100%),linear-gradient(270deg,rgba(37,99,235,0)_0%,#2563EB_87.5%)",
    showButtons: false,
  },
};
