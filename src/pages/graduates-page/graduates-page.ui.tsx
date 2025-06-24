import { Hero } from "~widgets/hero";
import { AlumniGrid } from "~features/alumni-grid";
export const GraduatesPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AlumniGrid />
    </div>
  );
};
