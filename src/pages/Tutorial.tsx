/* eslint-disable @typescript-eslint/no-explicit-any */
// import TutorialImg from "../assets/tutorial.png";
import Person from "../assets/person.jpeg";
import { FaStar } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import TutorialCard from "../components/TutorialCard";
import NewsBanner from "../components/NewsBanner";
import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Tutorial() {
  interface tutorialItem {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  const [tutorials, setTutorials] = useState<tutorialItem[]>([]);
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response: any = await axios.get<tutorialItem[]>(
          // "http://localhost:8000/api/tutorials"
          "/tutorials"
        );
        setTutorials(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchTutorials();
  }, []);
  return (
    <div className="w-full my-4 md:my-10 grid mx-4 md:mx-10 lg:mx-14 border-purple-800">
      <div className="mb-10">
        <h3 className="mx-4 text-xl md:text-2xl font-medium">Tutorial</h3>
        <NewsBanner />
      </div>
      <div>
        <h3 className="mx-4 text-xl md:text-2xl font-medium">Tutorial</h3>
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 auto-rows-auto">
          {tutorials.length &&
            tutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.id}
                new={true}
                title={tutorial.title}
                description={tutorial.description}
                img={tutorial.image}
              />
            ))}
        </div>
      </div>
      <div className="mt-14 md:mt-20 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 mg:grap-14">
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
      </div>
    </div>
  );
}

function InstructorCard() {
  return (
    <div className="grid mx-4 border border-t-0 shadow-lg">
      <div className="flex justify-between">
        <img
          src={Person}
          alt="instructor"
          className="relative bottom-8 mx-6 border-4 border-double shadow-md w-20 h-20 rounded-full"
        />
        <div className="m-4 grid grid-cols-5 text-main-red">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className="m-4">
        <h5 className="text-center text-xl md:text-2xl font-bold tracking-wider">
          Jerome Bell
        </h5>
        <p className="text-center opacity-90 text-sm md:text-md lg:text-lg">
          Constructive and destructive waves Constructive and destructive
          wavesConstructive and destructive wavesConstructive and destructive
          waves
        </p>
      </div>
    </div>
  );
}
