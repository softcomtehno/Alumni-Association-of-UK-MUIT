import { Hero } from "~widgets/hero";
import { MissionSection } from "~features/mission";
import { IstoryText } from "~widgets/istory-text";
import { PhotoGallery } from "~features/PhotoGallery";
export const AboutPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <MissionSection />
      <IstoryText />
      <PhotoGallery />
    </div>
  );
};
