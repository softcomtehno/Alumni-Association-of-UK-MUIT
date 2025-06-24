import { Hero } from "~widgets/hero";
import { NewsPageContent } from "~features/news-section";
export const NewsPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <NewsPageContent />
    </div>
  );
};
