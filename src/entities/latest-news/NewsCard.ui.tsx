import { NewsItem } from "./latest-news.model";

interface NewsCardProps {
  item: NewsItem;
  className?: string;
}

export const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className=" bg-white w-[464px] cursor-pointer rounded-3xl transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div>
        {item.imageUrl && (
          <div className="relative  rounded-lg">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="object-cover transition-transform max-w-[464px]   "
            />
          </div>
        )}
        <div className="px-[16px] py-[16px]">
          <p className="font-normal  text-base text-[#565656]  ">{item.date}</p>
          <h3 className="text-[20px] font-semibold mt-1 text-[darkblue] ">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
