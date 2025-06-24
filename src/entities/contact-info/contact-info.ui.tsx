import { ContactItem } from "./contact-info.types";

export const ContactCard = ({ contact }: { contact: ContactItem }) => {
  const content = (
    <div className="w-[464px] mx-auto py-4  border text-center border-solid border-[#A4C6E6] rounded-3xl">
      <img
        src={contact.icon}
        alt=""
        className="p-3 mx-auto rounded-xl bg-[#2563EB] "
      />
      <div>
        <h3 className="text-[22px] mt-[6px] mb-[2px] font-bold text-[#2563EB] ">
          {contact.title}
        </h3>
        <p className="text-[#102552] text-base font-semibold">
          {contact.value}
        </p>
      </div>
    </div>
  );

  return contact.link ? (
    <a
      href={contact.link}
      className="hover:bg-gray-50 transition-colors rounded-lg p-4"
    >
      {content}
    </a>
  ) : (
    <div className="p-4">{content}</div>
  );
};
