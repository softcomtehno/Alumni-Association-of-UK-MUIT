import { CommunityCTAProps } from "./community-cta.types";
import users from "~shared/image/community-cta/users.png";
import school from "~shared/image/community-cta/school.png";
import calendar from "~shared/image/community-cta/calendar-week.png";
export const COMMUNITY_CTA_DATA: CommunityCTAProps = {
  benefits: [
    {
      id: "1",
      title: "Развитие",
      description:
        "Получите доступ к образовательным ресурсам и возможностям для карьерного роста",
      icon: users,
    },
    {
      id: "2",
      title: "Сообщество",
      description:
        "Станете частью сообщества профессионалов и единомышленников",
      icon: school,
    },
    {
      id: "3",
      title: "Мероприятия",
      description:
        "Участвуйте в эксклюзивных мероприятиях, встречах и нетворкинг-сессиях",
      icon: calendar,
    },
  ],
};
