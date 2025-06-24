import { ContactCard } from "~entities/contact-info";
import { CONTACT_ITEMS } from "~entities/contact-info";

export const ContactSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_ITEMS.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
};
