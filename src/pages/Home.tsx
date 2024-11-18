/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
import serviceIcon from "../assets/serviceIcon3.png";
import finaicalImg from "../assets/financiallinkage.png";
import { Link } from "react-router-dom";
import NewsBanner from "../components/NewsBanner";
import NewsLetter from "../components/NewsLetter";
import OurSuccess from "../components/OurSuccess";
import SuccessNumbers from "../components/SuccessNumbers";
import YouTubeVideo from "../components/YoutubeVideo";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "../api/axios";

// import { t } from "i18next";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col">
      <LangButton />
      <Hero />
      <div className="flex justify-end my-4 mr-8">
        <Link
          to="/register"
          className="border border-main-red text-black font-bold hover:bg-main-red hover:text-white px-16 py-3 rounded-3xl">
          Register
        </Link>
      </div>
      <NewsBanner />
      <OurServices />
      <OurSuccess />
      <SuccessNumbers />
      <EventProgram />
      <NewsLetter />
    </div>
  );
}

function LangButton() {
  const { i18n, t } = useTranslation();

  const language = [
    { code: "en", name: "Eng" },
    { code: "amh", name: "Amh" },
  ];

  return (
    <div className="flex justify-end mx-2">
      {language.map((language) => (
        <button
          key={language.code}
          onClick={() => i18n.changeLanguage(language.code)}
          className={`p-2 ${
            language.code === i18n.language
              ? "bg-main-red text-white"
              : "bg-white text-main-red"
          }`}>
          {t(`${language.name}`)}
        </button>
      ))}
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-main-red p-14 md:px-24 md:py-20 lg:py-28 lg:px-40 ">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14">
        <div className="w-full flex flex-col">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold">
            {/* Elevate Your Business With Our Digital BDS Service */}
            {t("mottoTitle")}
          </h2>
          <p className="w-full mt-6 opacity-90 text-white">
            {/* Our digital Bds service aims to provide comprehensive support and
            guidance to help your business thrive in digital landscape . Our
            approach focuses on empowering withe the tools and strategies to
            navigate the ever-evolving digital ecosystem effectively */}
            {t("motto")}
          </p>
        </div>
        <div className="fle flex-grow">
          {/* <div className="bg-black flex  justify-center items-center rounded-xl aspect-video w-full">
            <img src={Youtube} className="" width={"90"} />
          </div> */}
          <YouTubeVideo videoId="dQw4w9WgXcQ" />
        </div>
      </div>
    </div>
  );
}

function OurServices() {
  interface ServiceItem {
    id: number;
    title: string;
    description: string;
  }

  const [service, setService] = useState<ServiceItem[]>([]);
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response: any = await axios.get<ServiceItem[]>(
          "/service"
          // "http://localhost:8000/api/service"
        );
        setService(response.data);
      } catch (error) {
        console.error("Error fetching Service:", error);
      }
    };

    fetchService();
  }, []);

  return (
    <div className="w-full mt-5 px-8 md:px-14">
      {/* TODO implement background shape */}
      <div className="flex flex-col mb-10">
        <h3 className="text-center text-dark-red text-xl md:text-3xl font-bold">
          Our Services
        </h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-6 items-center py-4 justify-center">
        {service.length > 0 ? (
          service.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <p>No news available.</p>
        )}
      </div>

      <div className="w-full grid gap-6 md:grid-cols-2 mx-auto mt-14 border rounded-2xl overflow-hidden">
        <div className="flex md:items-center">
          <img src={finaicalImg} className="w-full" />
        </div>
        <div className="">
          <h4 className="mt-14 text-3xl font-bold text-center text-dark-red">
            Access to financial linkage
          </h4>
          <p className="px-6 sm:px-10 md:px-18 py-4 md:py-8">
            Our digital Bds service aims to provide comprehensive support and
            guidance to help your business thrive in digital landscape . Our
            approach focuses on empowering withe the tools Our digital Bds
            service aims to provide comprehensive support and guidance to help
            your business thrive in digital landscape . Our approach focuses on
            empowering withe the tools Our digital Bds service aims to provide
            comprehensive support and guidance to help your business thrive in
            digital landscape . Our approach focuses on empowering withe the
            tools Our digital Bds service aims to provide comprehensive support
            and guidance to help your business thrive in digital landscape . Our
            approach focuses on empowering withe the tools
          </p>
          <div className="flex justify-center my-8 mr-8">
            <button className="border border-main-red text-black font-bold hover:bg-main-red hover:text-white px-16 py-3 rounded-3xl">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
}
const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <div className="border shadow-custom flex flex-col px-8 py-4 w-full h-80 max-w-xs sm:max-w-md lg:max-w-lg rounded-2xl">
    <div className="w-max mx-auto bg-white relative bottom-16">
      <img src={serviceIcon} className="w-20" alt="Tutorial Icon" />
    </div>
    <p className="relative bottom-8 text-dark-red text-xl md:text-2xl lg:text-3xl mb-3 font-bold text-center">
      {title}
    </p>
    <span className="relative bottom-4 text-center text-wrap truncate text-gray-600">
      {description}
    </span>
  </div>
);

function EventProgram() {
  return (
    <div className="w-full mt-4 mx-2 md:mx-14 border shadow-right-bottom shadow-custom rounded-2xl md:rounded-[60px]">
      <div className="grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden">
        <div className="m-4 grid md:items-center">
          <img src={finaicalImg} className="w-full rounded-3xl" />
        </div>
        <div className="grid">
          <h4 className="mt-6 text-3xl font-bold text-center text-dark-red">
            Event Program
          </h4>
          <p className="px-8 md:px-12 py-6">
            Our digital Bds service aims to provide comprehensive support and
            guidance to help your business thrive in digital landscape . Our
            approach focuses on empowering withe the tools Our digital Bds
            service aims to provide comprehensive support and guidance to
          </p>
          <div className="flex items-center justify-center m-8">
            <button className="border border-main-red text-black font-bold hover:bg-main-red hover:text-white px-16 py-3 rounded-3xl">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
