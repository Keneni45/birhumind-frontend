/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react"
import {
  FaCalendar,
  // FaHeart
} from "react-icons/fa6";
import OneOnOne from "../assets/oneonone.jpg";
import OurSuccess from "../components/OurSuccess";
import SuccessNumbers from "../components/SuccessNumbers";
import Person from "../assets/person.jpeg";
import mountain from "../assets/mountainview.webp";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineBookmark } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";

interface Consultant {
  id: number | string;
  instructor_name: string;
  instructor_image: string;
  about_instructor: string;
  instructor_title: string;
}

interface Consultancy {
  id: number | string;
  title: string;
  description: string;
  publish_date: string;
  update_date: string;
}

export default function Consultancy() {
  const [constaltants, setConsultants] = useState<Consultant[]>([]);
  const [consultancies, setConsultancies] = useState<Consultancy[]>([]);

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const response: any = await axios.get<Consultant[]>(
          "http://localhost:8000/api/consultant"
        );
        setConsultants(response.data);
      } catch (error) {
        console.error("Error fetching consultants:", error);
      }
    };

    const fetchConsultancies = async () => {
      try {
        const response: any = await axios.get<Consultancy[]>(
          "http://localhost:8000/api/consultancy"
        );
        setConsultancies(response.data);
      } catch (error) {
        console.error("Error fetching consultancies:", error);
      }
    };

    fetchConsultants();
    fetchConsultancies();
  }, []);

  return (
    <div className="grid w-full mb-8">
      <div className="mt-8 mx-4 md:mx-10 lg:mx-16">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold md:mt-6 lg:mt-10 text-center text-gray-700">
          Consultancy Services
        </h1>
        <p className="my-4 sm:mx-6 md:mx-12 lg:mx-48 text-center opacity-85 md:text-lg lg:text-xl text-gray-600">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>
      </div>
      <div className="mt-12 mx-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {consultancies.length > 0 ? (
          consultancies.map((consultancy: Consultancy) => (
            <Cards
              key={consultancy.id}
              title={consultancy.title}
              description={consultancy.description}
            />
          ))
        ) : (
          <p>No consultancy available.</p>
        )}
      </div>
      <div className="grid lg:grid-cols-2 mx-6 mt-10 sm:mx-8 md:mx-10 lg:mx-14 gap-8">
        <div className="">
          <img src={OneOnOne} alt="" />
        </div>
        <div className="lg:mx-32 flex items-center justify-center">
          <div className="">
            <h3 className="my-2 text-4xl font-bold tracking-wider">
              One-on-One
            </h3>
            <h3 className="my-2 text-4xl font-bold tracking-wider text-main-red">
              Discussions
            </h3>
            <p className="lg:mr-12">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
      </div>
      <OurSuccess />
      <SuccessNumbers />
      <div className="mt-8 mx-4 sm:mx-8 md:mx-12 md:mt-14 lg:mt-24 grid">
        <h4 className="my-2 text-center text-3xl md:text-4xl text-gray-700 font-bold tracking-wider">
          Our Golden Consultants
        </h4>
        <div className="mt-6 grid sm:mx-4 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
          {constaltants.length > 0 ? (
            constaltants.map((consultant: Consultant) => (
              <ConsultancyCard
                key={consultant.id}
                name={consultant.instructor_name}
                image={consultant.instructor_image}
                about={consultant.about_instructor}
                title={consultant.instructor_title}
              />
            ))
          ) : (
            <p>No consultants available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// use Consultant Interface
function ConsultancyCard(props: {
  name: string;
  image: string;
  about: string;
  title: string;
}) {
  const handleImageError = (e: any) => {
    e.target.src = Person;
  };
  return (
    <div className="grid mx-4 border-4 rounded-2xl border-t-0 shadow-lg overflow-hidden">
      <div className="h-32 overflow-hidden">
        <img src={mountain} className="object-cover w-full h-full" />
      </div>
      <div className="flex justify-center relative bottom-12">
        <img
          src={Person}
          onError={handleImageError}
          alt="instructor"
          className="mx-6 border-4  shadow-md w-24 h-24 rounded-full"
        />
      </div>
      <div className="mx-4 relative bottom-8">
        <h5 className="text-center text-xl md:text-2xl font-bold tracking-wider text-gray-700">
          {props.name}
        </h5>
        <p className="text-center opacity-90 mx-4 text-sm md:text-md text-gray-600">
          {props.about}
        </p>
      </div>
      <div className="grid items-center grid-cols-3 mb-2">
        <div className="text-center flex flex-col justify-center items-center">
          <AiOutlineHeart className="text-main-red" />
          <span className="text-xs sm:text-md mt-1">134</span>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <HiOutlineBookmark className="text-blue-600" />
          <span className="text-xs sm:text-md mt-1">55</span>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <AiOutlineMessage className="text-yellow-600" />
          <span className="text-xs sm:text-md mt-1">31</span>
        </div>
      </div>
    </div>
  );
}

function Cards(props: { title: string; description: string }) {
  return (
    <div className="grid my-2 md:mx-4 border shadow-lg rounded-xl">
      <div className="flex justify-center items-center relative bottom-5">
        <div className="rounded-full bg-purple-500 p-4">
          <FaCalendar size={36} className="shadow-lg text-white" />
        </div>
      </div>
      <div className="m-4">
        <h5 className="text-center mx-2 text-lg font-bold tracking-wider text-gray-700">
          {props.title}
        </h5>
        <p className="text-center mx-4 my-2 opacity-90 text-sm md:text-md text-gray-600">
          {props.description}
        </p>
      </div>
    </div>
  );
}
