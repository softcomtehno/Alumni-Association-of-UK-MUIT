import { Institution } from "./educational-institutions.types";
import { Button } from "~app/components/ui/button";
import { Instagram, MessageSquare } from "lucide-react";

interface InstitutionCardProps {
  institution: Institution;
}

export const InstitutionCard = ({ institution }: InstitutionCardProps) => {
  return (
    <div className="bg-[#DAE7F3] w-[464px] rounded-3xl pt-[20px]">
      <div>
        <img className="mx-auto" src={institution.icon} alt="" />
        <div>
          <h3
            style={{ color: institution.colorClass }}
            className="font-bold text-[20px] pt-4 leading-6 text-center mx-auto max-w-[367px]"
          >
            {institution.name}
          </h3>
          <div className=" border-b border-solid border-[#A4C6E6] pt-10 "></div>
        </div>
        <div className="flex justify-center gap-3 py-6">
          {institution.socialLinks.instagram && (
            <Button className="text-[#2563EB] bg-white w-[190px] cursor-pointer rounded-2xl h-[50px]">
              <a
                href={institution.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-[20px]"
              >
                <Instagram className="!h-6 !w-6" />
                Instagram
              </a>
            </Button>
          )}
          {institution.socialLinks.whatsApp && (
            <Button className="text-[#2563EB] bg-white w-[190px] cursor-pointer rounded-2xl h-[50px]">
              <a
                href={institution.socialLinks.whatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-[20px]"
              >
                <MessageSquare className="!h-6 !w-6" />
                WhatsApp
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
