import { Header } from "~widgets/index";
import { NewsDetail } from "~widgets/news-detail";
import { OtherNews } from "~features/other-news";
export const NewsDetailPage: React.FC = () => {
  return (
    <div>
      <Header />
      <NewsDetail />
      <OtherNews />
    </div>
  );
};
