import { useState, useEffect } from "react";
import { Button } from "~app/components/ui/button";
import { ChevronRight } from "lucide-react";
import { NewsCard } from "~entities/latest-news";
import { fetchNews } from "~entities/latest-news";
import { NewsItem } from "~entities/latest-news";
import { Link } from "react-router-dom";
import { Container } from "~shared/ui";

export const LatestNews = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        const data = await fetchNews(3); // Загружаем только 3 новости
        setNewsItems(data);
        setError(null);
      } catch (err) {
        console.error("Failed to load news:", err);
        setError("Не удалось загрузить новости");
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full bg-[#DAE7F3] rounded-[80px] mb-30 py-12 text-center">
        Загрузка новостей...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-[#DAE7F3] rounded-[80px] mb-30 py-12 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full mt-[120px] max-[640px]:mt-[24px]  max-[640px]:rounded-[50px] bg-[#DAE7F3] rounded-[80px] ">
      <Container>
        <div>
          <h3 className="text-[36px] max-[510px]:text-[26px] text-[#102552] pt-[40px] pb-[20px] text-center font-bold">
            Последние новости
          </h3>
        </div>
        <div className="flex  justify-center gap-6 flex-wrap">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-[20px] pb-[40px]">
          <Link to="/news">
            <Button
              variant="link"
              className="text-[darkblue] h-[57px] w-[304px] text-[20px] flex items-center mx-auto rounded-2xl font-medium bg-white"
            >
              Все новости и события{" "}
              <ChevronRight className="!w-[24px] !h-[24px] mt-0" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
