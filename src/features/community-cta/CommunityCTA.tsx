import { CommunityCTAProps } from "~entities/community-cta";
import { COMMUNITY_CTA_DATA } from "~entities/community-cta";
import { BenefitCard } from "~entities/community-cta";
import { Button } from "~app/components/ui/button";

export const CommunityCTA = () => {
  const { benefits } = COMMUNITY_CTA_DATA;

  return (
    <section>
      <div className="max-w-[1440px] mt-[110px] max-[640px]:mt-[30px] max-[400px]:max-w-[380px] rounded-[64px] bg-[#DAE7F3] mx-auto">
        <div className="mx-auto  max-w-[803px] text-center">
          <h2 className="text-4xl text-[#2563EB]  max-[600px]:text-2xl   pt-[40px] pb-[16px] font-bold tracking-tight">
            Стань частью нашего сообщества
          </h2>
          <p className=" text-[#102552] max-[600px]:text-base  text-[20px] pb-[40px] leading-6 text-center ">
            Присоединяйтесь к Ассоциации выпускников, чтобы получить доступ к
            эксклюзивным мероприятиям, возможностям профессионального роста и
            сети контактов <br /> среди выпускников и партнеров
          </p>
        </div>
        <div className="flex mb-10 items-center justify-center gap-6 flex-wrap max-w-[1196px] mx-auto">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
        <div className="text-center">
          <Button className="cursor-pointer max-[505px]:w-[390px] max-[400px]:w-[370px] max-[505px]:text-base w-[464px] mb-[40px] bg-[#2563EB] font-medium text-[20px] h-[49px] rounded-2xl text-white">
            Зарегистрироваться сейчас
          </Button>
        </div>
      </div>
    </section>
  );
};
