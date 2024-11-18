/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import te from "../assets/news.jpeg";
import NewsBanner from "../components/NewsBanner";
import { FaNewspaper } from "react-icons/fa6";
import NewsLetter from "../components/NewsLetter";
import { useEffect, useState } from "react";
import axios from "../api/axios";

export interface NewsItem {
  id: number;
  title: string;
  subHead: string;
  content: string;
  author: string;
  published_date: string;
  updated_date: string;
  image: string | null;
  category: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response: any = await axios.get<NewsItem[]>(
          // "http://localhost:8000/api/news"
          "/news"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="grid my-4">
      <div className="mx-4 md:mx-8 lg:mx-14 grid lg:grid-cols-2 gap-4">
        <NewsWideCard />
        <NewsWideCard />
      </div>
      <div className="my-4 px-6 w-full flex justify-end">
        <button className="flex items-center gap-4 bg-superLight-red border border-black rounded-lg px-4 py-2">
          <FaNewspaper />
          Old News
        </button>
      </div>
      <hr className="border border-main-red" />

      <div className="m-4 md:m-6 lg:m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-6">
        {news.length > 0 ? (
          news.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              subHead={item.subHead}
              content={item.content}
              author={item.author}
              published_date={item.published_date}
              updated_date={item.updated_date}
              image={item.image}
              category={item.category}
            />
          ))
        ) : (
          <p>No news available.</p>
        )}
      </div>
      <hr className="border border-main-red" />
      <div className="grid mt-4 mx-2 md:mx-8 md:mt-8">
        <h4 className="mx-6 mb-4 text-lg md:text-2xl font-bold text-gray-700">
          Product Announcement
        </h4>
        <div className="grid lg:grid-cols-2 mx-4 gap-6">
          <AnnouncementCard />
          <AnnouncementCard />
        </div>
      </div>
      <div className="mt-8">
        <NewsBanner />
      </div>
      <div className="mt-3 md:mt-6 lg:m-8">
        <NewsLetter />
      </div>
    </div>
  );
}

function AnnouncementCard() {
  return (
    <div className="grid md:grid-cols-2 items-center mx-2 shadow-lg h-max border border-slate-300">
      <div className="grid items-center w-full h-full">
        <img src={te} className="w-full h-full" />
      </div>
      <div className="grid m-4">
        <div className="flex justify-end md:justify-start md:mx-2 mb-3">
          <span className="px-3 py-1 rounded-md h-max font-medium w-max text-white bg-custom-black">
            3d | ago
          </span>
        </div>
        <h4 className="text-xl font-bold mx-2">
          Constructive and destructive waves
        </h4>
        <p className="opacity-80 mx-2">
          met minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
}

function NewsWideCard() {
  return (
    <div className="flex mx-2 shadow-custom-lg h-max border border-slate-200">
      <div className="w-1/2 m-4 md:m-8">
        <h3 className="text-xl font-bold">Title</h3>
        <p className="text-sm md:tex-lg sm:text-md mr-4 sm:mt-4 md:mt-6">
          Our digital Bds service aims to provide comprehensive support and
          guidance to help your business thrive in digital landscape . Our
          approach focuses on empowering withe the tools
        </p>
      </div>
      <div className="relative w-1/2 bg-[url('https://eccog.org/wp-content/uploads/2023/10/news.jpg')] bg-cover bg-center h-64">
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-white px-4 py-2 rounded-md bg-main-red text-xs sm:text-sm md:text-md">
          12hr ago | Aug 16
        </span>
      </div>
    </div>
  );
}

const NewsCard: React.FC<NewsItem> = ({
  id,
  title,
  content,
  published_date,
}) => {
  console.log(title, content, published_date);
  const publishedDate = new Date(published_date).toLocaleDateString();
  return (
    <div className="grid rounded-lg shadow-md p-2 md:p-6 border border-gray-300">
      <span className="flex px-3 py-1 rounded-md text-xs w-max text-white bg-main-red">
        {publishedDate} | ago
      </span>
      <Link
        to={id.toString()}
        className="text-2xl font-bold mt-4 text-gray-700 hover:underline transition duration-300 ease-linear">
        {title}
      </Link>
      <p className="text-gray-600 text-sm truncate">{content}</p>
      <Link
        to={id.toString()}
        className="mt-2 border w-max px-2 py-1 rounded border-gray-600 text-sm hover:bg-gray-700 hover:text-white">
        read more
      </Link>
    </div>
  );
};
