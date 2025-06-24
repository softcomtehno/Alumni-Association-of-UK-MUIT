import { InstitutionCard } from "~entities/educational-institutions";
import { INSTITUTIONS } from "~entities/educational-institutions";

export const EducationalInstitutions = () => {
  return (
    <section className="">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[36px] text-[#2563EB]  font-bold text-center mt-[120px] mb-4">
          Наши учебные заведения
        </h2>
        <h4 className="font-normal text-[#102552] text-[20px] leading-5 text-center max-w-[560px] mx-auto mb-6">
          Ассоциация объединяет выпускников трех учебных заведений, входящих в
          Университетский комплекс МУИТ
        </h4>
        <div className="flex items-center justify-between">
          {INSTITUTIONS.map((institution) => (
            <InstitutionCard key={institution.id} institution={institution} />
          ))}
        </div>
      </div>
    </section>
  );
};
