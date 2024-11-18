/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function OurSuccess() {
  interface SuccessItem {
    id: number;
    title: string;
    subHead: string;
    description: string;
    student_number: string;
    total_success: string;
    chief_expert: string;
    years_experience: string;
  }
  const [ourSuccess, setOurSuccess] = useState<SuccessItem[]>([]);
  useEffect(() => {
    const fetchOurSuccess = async () => {
      try {
        const response: any = await axios.get<SuccessItem[]>(
          // "http://localhost:8000/api/success"
          "/success"
        );
        setOurSuccess(response.data);
      } catch (error) {
        console.error("Error fetching success:", error);
      }
    };

    fetchOurSuccess();
  }, []);
  return (
    <div className="w-full sm:w-5/6 md:w-4/6 lg:w-1/2 mx-auto flex flex-col mt-14">
      {ourSuccess.length > 0 ? (
        ourSuccess.map((item) => (
          <div>
            <h4 className="text-center text-bold text-4xl text-dark-red">
              {item.title}
            </h4>
            <p className="mt-4 px-14 text-center">{item.description}</p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
