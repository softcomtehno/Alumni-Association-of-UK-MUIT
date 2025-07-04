import { useState, useEffect } from "react";
import { Button } from "~app/components/ui/button";
import { ChevronRight } from "lucide-react";
import { EventCard } from "~entities/event";
import { fetchEvent } from "~entities/event";
import { EventItem } from "~entities/event";
import { Link } from "react-router-dom";

export const OtherEvent = () => {
  const [newsItems, setNewsItems] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        const data = await fetchEvent(3); // Загружаем только 3 новости
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
    <div className="w-full bg-[#DAE7F3] rounded-[80px] mb-30">
      <div className="max-w-[1440px] mx-auto px-4">
        <div>
          <h3 className="text-[36px] text-[#102552] pt-[40px] pb-[20px] text-center font-bold">
            Другие события
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <EventCard key={item.id} item={item} />
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
      </div>
    </div>
  );
};
