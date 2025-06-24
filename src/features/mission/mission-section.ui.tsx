import { useMissions } from "~entities/mission";
import { MissionCard } from "~entities/mission";
import { MissionSectionProps } from "~entities/mission";

export const MissionSection = ({ missions }: MissionSectionProps) => {
  const missionItems = useMissions(missions);

  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="">
        <div className="text-center mb-[20px] mt-[35px]">
          <h2 className="text-[36px] font-bold text-[darkblue] ">
            Наша миссия и цели
          </h2>
        </div>

        <div className="flex items-center justify-between">
          {missionItems.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
    </section>
  );
};
