import { Tabs, TabsList, TabsTrigger } from "~app/components/ui/tabs";
import { fetchNews } from "~entities/latest-news";
import { NewsCard } from "~entities/latest-news";
import { useState, useEffect } from "react";
import { NewsItem } from "~entities/latest-news";
import { EventItem, fetchEvent, EventCard } from "~entities/event";

const CATEGORIES = [
  { value: "news", label: "Новости" },
  { value: "event", label: "События" },
];

export const NewsPageContent = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [category, setCategory] = useState("news");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [newsData, eventsData] = await Promise.all([
          fetchNews(),
          fetchEvent(),
        ]);
        setNews(newsData);
        setEvents(eventsData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="bg-[#DAE7F3] rounded-[80px] pb-[40px] mt-[40px]">
      <div className="max-w-[1440px] mx-auto">
        <Tabs value={category} onValueChange={setCategory}>
          <TabsList className="bg-white mx-auto mt-[40px] mb-[20px] py-2 px-3 w-[342px] h-[65px] rounded-[24px] shadow-sm">
            {CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="
                  !px-[32px] !py-[2px] 
                  text-[20px] font-medium 
                  transition-all
                  rounded-2xl
                  data-[state=active]:bg-[#2563EB] 
                  data-[state=active]:text-white
                  data-[state=active]:shadow-sm
                  data-[state=inactive]:text-[#2563EB]
                  data-[state=inactive]:hover:text-gray-700
                "
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {category === "news"
              ? news.map((item) => <NewsCard key={item.id} item={item} />)
              : events.map((item) => <EventCard key={item.id} item={item} />)}
          </div>
        </Tabs>
      </div>
    </div>
  );
};
