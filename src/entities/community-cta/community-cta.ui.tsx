import { Benefit } from "./community-cta.types";

interface BenefitCardProps {
  benefit: Benefit;
}

export const BenefitCard = ({ benefit }: BenefitCardProps) => {
  return (
    <div className="bg-white rounded-3xl w-[382px] py-[16px] px-[16px] hover:shadow-lg">
      <div className="">
        <div className="bg-[#2563EB]  mx-auto w-[48px] flex items-center  h-[48px] rounded-xl">
          <img src={benefit.icon} className="h-6 w-6 mx-auto " />
        </div>
        <div className="flex items-center  gap-3">
          <h3 className="text-2xl font-semibold mx-auto  pt-[12px] pb-2 text-[#2563EB]">
            {benefit.title}
          </h3>
        </div>
      </div>
      <div>
        <p className="text-center max-w-[300px] break-words mx-auto text-[17px] text-[#102552] leading-5 font-semibold">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};
