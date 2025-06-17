import { CardContent } from "~app/components/ui/card";
import { Button } from "~app/components/ui/button";
import { ChevronRight } from "lucide-react";
import { NewsCard } from "~entities/latest-news";
import { useEffect, useState } from "react";
import { fetchLatestNews } from "~entities/latest-news";
import { NewsItem } from "~entities/latest-news";

export const LatestNews = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchLatestNews();
        setNewsItems(data);
      } catch (err) {
        setError("Не удалось загрузить новости");
        console.error("Error loading news:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, []);

  if (isLoading) {
    return <div>Загрузка новостей...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-[#DAE7F3] mt-[120px] rounded-[80px] ">
      <div className="w-full ] ">
        <h3 className=" text-center  font-medium text-[36px] text-[darkblue] pt-10 pb-5">
          Последние новости
        </h3>
        <CardContent className=" flex  justify-between ">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </CardContent>
        <div className="pt-[20px] pb-[40px]  ">
          <Button
            variant="link"
            className=" text-[#2563EB] cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-102  bg-white w-[304px] mx-auto px-[24px] h-[57px] rounded-2xl   flex items-center font-medium text-[20px]"
          >
            Все новости и события
            <ChevronRight className="!w-[24px] !h-[24px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};
