import { ContactForm } from "~entities/contact-form";
import { SectionTitle } from "~app/components/ui/textarea";

export const ContactFormSection = () => {
  const handleSubmit = async (values: any) => {
    // Здесь логика отправки формы
    console.log(values);
    try {
      // await sendContactForm(values);
      alert("Сообщение отправлено!");
    } catch (error) {
      alert("Ошибка при отправке");
    }
  };

  return (
    <section className="max-w-[708px] mx-auto">
      <SectionTitle className="text-center font-bold text-[34px] mb-[24px] mb-30 text-[#2563EB]">
        Свяжитесь с нами
      </SectionTitle>
      <div className="bg-white  ">
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
};
