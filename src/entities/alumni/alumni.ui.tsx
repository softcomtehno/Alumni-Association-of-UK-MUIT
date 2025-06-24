import { Alumni } from "./alumni.types";
import { Button } from "~app/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

interface AlumniCardProps {
  alumni: Alumni;
  className?: string;
}

export const AlumniCard = ({ alumni }: AlumniCardProps) => {
  return (
    <div className="w-[464px] text-center grid   justify-center rounded-[40px] border border-solid border-[#A4C6E6] hover:shadow-lg  transition-shadow">
      <div className="mx-auto">
        <div className="mt-[24px]">
          {alumni.imageUrl ? (
            <img
              src={alumni.imageUrl}
              alt={alumni.name}
              className="w-[268px] h-[268px] rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
              {alumni.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
          <div>
            <h3 className="text-[22px] text-[#102552] pt-[16px]  font-medium">
              {alumni.name}
            </h3>
            <p className="text-[#00443C] text-[18px] font-bold">
              {alumni.institution}
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-[#6F7684] text-base pt-[4px]">
          <span className="font-normal">Год выпуска:</span>{" "}
          {alumni.graduationYear}
          {alumni.gpa && `, GPA: ${alumni.gpa}`}
        </p>
        <p className="text-[#6F7684] text-base"> {alumni.specialization}</p>
        <p className="max-w-[350px] text-base text-[#102552] font-medium">
          {alumni.description}
        </p>
      </div>

      <div className="flex flex-col items-start gap-3">
        <Button className="bg-[#2563EB] mx-auto text-white text-[16px] w-[200px] rounded-[24px] mt-[10px] mb-[24px] h-[39px]">
          Есть вопросы?
        </Button>
      </div>
    </div>
  );
};
