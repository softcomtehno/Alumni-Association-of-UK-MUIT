import { Container } from "~shared/ui";
import { InstitutionCard } from "~entities/educational-institutions";
import { INSTITUTIONS } from "~entities/educational-institutions";

export const EducationalInstitutions = () => {
  return (
    <section className="  max-[640px]:mt-[24px] mt-[120px]">
      <Container>
        <h2 className="text-[36px] max-[640px]:text-2xl text-[#2563EB]  font-bold text-center mb-4">
          Наши учебные заведения
        </h2>
        <h4 className="font-normal max-[640px]:text-base text-[#102552] text-[20px] leading-5 text-center max-w-[560px] mx-auto mb-6">
          Ассоциация объединяет выпускников трех учебных заведений, входящих в
          Университетский комплекс МУИТ
        </h4>
        <div className="flex items-center gap-6  justify-center   flex-wrap">
          {INSTITUTIONS.map((institution) => (
            <InstitutionCard key={institution.id} institution={institution} />
          ))}
        </div>
      </Container>
    </section>
  );
};
