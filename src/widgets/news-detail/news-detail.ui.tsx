import { fetchNewsBySlug } from "~entities/latest-news";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "~app/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsItem } from "~entities/latest-news";
export const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      if (slug) {
        const data = await fetchNewsBySlug(slug);
        setNewsItem(data);
      }
      setLoading(false);
    };
    loadNews();
  }, [slug]);

  if (loading) return <div>Загрузка...</div>;
  if (!newsItem) return <div>Новость не найдена</div>;

  return (
    <div className="max-w-[1440px] mx-auto relative mb-20">
      <Link to="/news">
        <Button className="bg-[#2563EB] ml-[30px] absolute">
          <ChevronLeft className="text-white !w-[24px] !h-[24px]" />
        </Button>
      </Link>

      <div className=" mx-auto mt-[24px] max-w-[1196px]">
        {newsItem.imageUrl && (
          <img
            src={newsItem.imageUrl}
            alt={newsItem.title}
            className=" rounded-xl  h-[637px] object-cover"
          />
        )}
        <div className="max-w-[952px] mx-auto text-center">
          <p className="text-[20px]  text-center font-semibold mt-[24px] text-[#565656]">
            {newsItem.date}
          </p>
          <h3 className="font-bold text-[26px]  font-sans antialiased text-center text-[#102552] ">
            {newsItem.title}
          </h3>

          <div className="text-[16px] mt-[36px]  font-semibold text-start leading-8 text-[#102552]">
            {newsItem.description}
          </div>
        </div>
      </div>
    </div>
  );
};
