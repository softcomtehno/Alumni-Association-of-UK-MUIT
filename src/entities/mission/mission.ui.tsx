import { MissionItem } from "./mission.types";

interface MissionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  mission: MissionItem;
}

export const MissionCard = ({
  mission,
  className,
  ...props
}: MissionCardProps) => (
  <div
    className={` text-center  w-[464px] h-[220px] py-3 mx-auto bg-white border border-solid border-[#A4C6E6] rounded-3xl ${className}`}
    {...props}
  >
    <img src={mission.icon} className="p-3 mx-auto rounded-xl bg-[#2563EB]" />
    <div className="max-w-[410px] mx-auto">
      <h3 className="font-bold text-[22px] mt-[8px] mb-[8px]  text-[#2563EB]">
        {mission.title}
      </h3>

      <p className="text-base text-[darkblue] leading-4.5 font-medium">
        {mission.description}
      </p>
    </div>
  </div>
);
