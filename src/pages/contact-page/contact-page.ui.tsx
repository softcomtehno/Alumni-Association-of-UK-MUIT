import { Hero } from "~widgets/hero";
import { ContactSection } from "~features/contact-section";
import { EducationalInstitutions } from "~features/educational-institutions";
import { ContactFormSection } from "~widgets/contact-form";
export const ContactPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ContactSection />
      <EducationalInstitutions />
      <ContactFormSection />
    </div>
  );
};
