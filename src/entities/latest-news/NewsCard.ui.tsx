import { NewsItem } from "./latest-news.types";
import { Link } from "react-router-dom";
interface NewsCardProps {
  item: NewsItem;
  className?: string;
}

export const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <Link
      to={`/news/${item.slug}`}
      className=" bg-white  w-[464px] cursor-pointer rounded-3xl transition-all duration-300 hover:shadow-xl hover:scale-101"
    >
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
        <div className="px-[16px] pb-[32px] pt-[16px]">
          <p className="font-normal  text-base text-[#565656]  ">{item.date}</p>
          <h3 className="text-[20px] font-semibold mt-1 text-[#102552] leading-6   ">
            {item.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
