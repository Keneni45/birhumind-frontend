/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import NewsBannerCard from "./NewsBannerCard";
import axios from "../api/axios";

export default function NewsBanner() {
  interface NewsItem {
    id: number;
    title: string;
    subHead: string;
  }
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response: any = await axios.get<NewsItem[]>(
          "/news"
          // "https://menshdigitalbds.com/api/news"
          // "http://localhost:8000/api/news"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);
  return (
    <div className="grid mb-5 mx-4">
      <hr className="border-2 my-2 border-main-red" />
      <div className="grid sm:grid-cols-2 lg:justify-around md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {news.length > 0 ? (
          news.map((item) => (
            <NewsBannerCard
              key={item.id}
              id={item.id}
              title={item.title}
              subHead={item.subHead}
            />
          ))
        ) : (
          <p>No news available.</p>
        )}
      </div>
      <hr className="border-2 my-2 border-main-red" />
    </div>
  );
}
