import { Link } from "react-router-dom";
import { Typography } from "~shared/ui";
import { FooterSection } from "../footer";

export const FooterLinks = ({ title, data }: FooterSection[]) => {
  return (
    <div>
      <Typography variant="h4" className="text-[#2563EB] mb-3">
        {title}
      </Typography>
      <div className="flex flex-col gap-2.5">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-x-2">
            {item?.icon}
            <Link to={"#"}>{item.linkTitle}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
