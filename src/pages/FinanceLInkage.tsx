/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FaCalendar } from 'react-icons/fa'
// import Youtube from '../assets/youtubelogo.png'
// import awash from '../assets/awash.png'
// import telebirr from '../assets/Telebirr.png'
import placeholder from "../assets/placeholder.png";
// import cbe from '../assets/cbelogo.png'
// import abysinnia from '../assets/abysinia.webp'

import YouTubeVideo from "../components/YoutubeVideo";
import { useEffect, useState } from "react";
import axios from "axios";

interface Finance {
  id: number | string;
  title: string;
  company_logo: string;
  description: string;
  url: string;
}

export default function FinanceLinkage() {
  const [finances, setFinances] = useState<Finance[]>([]);
  useEffect(() => {
    const fetchFinance = async () => {
      try {
        const response: any = await axios.get<Finance[]>(
          "http://localhost:8000/api/finance"
        );
        setFinances(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchFinance();
  }, []);

  return (
    <div className="w-full p-14 md:px-24 md:py-20 lg:py-28 lg:px-40 ">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14">
        <div className="w-full flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold">
            About Access To Finance Linkage
          </h2>
          <p className="w-full mt-6 opacity-90 ">
            TOTC’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <p className="w-full mt-6 opacity-90 underline">learn more</p>
        </div>
        <div className="fle flex-grow">
          <YouTubeVideo videoId="dQw4w9WgXcQ" />
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {finances.length &&
          finances.map((finance: any) => (
            <FinanceCard
              key={finance.id}
              title={finance.title}
              img={finance.company_logo}
              subTitle={finance.description}
            />
          ))}
      </div>
    </div>
  );

  function FinanceCard({
    title,
    subTitle,
    img,
  }: {
    title: string;
    subTitle: string;
    img: string;
  }) {
    const handleImageError = (e: any) => {
      e.target.src = placeholder;
    };
    return (
      <div className="border shadow-lg rounded-xl border-t-0 my-3">
        <div className="flex justify-center items-center -mt-10 lg:-mt-16">
          <div className="rounded-full shadow-lg">
            <img
              src={img ?? placeholder}
              onError={handleImageError}
              className="w-20 lg:w-24 rounded-full"
              alt={title}
            />
          </div>
        </div>
        <div className="mx-4 mt-4 mb-6">
          <h5 className="text-center text-lg text-gray-700 md:text-xl lg:text-2xl font-bold tracking-wider">
            {title}
          </h5>
          <p className="text-center text-gray-600 text-sm md:text-base lg:text-lg mt-2 h-16">
            {subTitle}
          </p>
        </div>
      </div>
    );
  }
}
