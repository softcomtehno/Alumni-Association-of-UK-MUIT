import { useMissions } from "~entities/mission";
import { MissionCard } from "~entities/mission";
import { MissionSectionProps } from "~entities/mission";

export const MissionSection = ({ missions }: MissionSectionProps) => {
  const missionItems = useMissions(missions);

  return (
    <section className="max-w-[1440px] px-4 mx-auto">
      <div className="">
        <div className="text-center mb-[20px] mt-[35px]  max-[550px]:mt-0">
          <h2 className="text-[36px] font-bold text-[darkblue] max-[550px]:text-[24px] max-[550px]:pb-3 ">
            Наша миссия и цели
          </h2>
          <p className="hidden max-[550px]:block text-base text-[#102552] ">
            Присоединяйтесь к Ассоциации выпускников, чтобы получить доступ к
            эксклюзивным мероприятиям, возможностям профессионального роста и
            сети контактов среди выпускников и партнеров
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          {missionItems.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
    </section>
  );
};
