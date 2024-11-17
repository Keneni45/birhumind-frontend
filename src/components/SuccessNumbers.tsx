/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";

export default function SuccessNumbers() {
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
          "http://localhost:8000/api/success"
        );
        setOurSuccess(response.data);
      } catch (error) {
        console.error("Error fetching success:", error);
      }
    };

    fetchOurSuccess();
  }, []);
  return (
    <div>
      {ourSuccess.length > 0 ? (
        ourSuccess.map((item) => (
          <div
            key={item.id}
            className="mx-14  mt-4 md:mt-10 md:mx-20 lg:mx-26 grid md:grid-cols-2 lg:grid-cols-4 justify-center  gap-8">
            <div className="">
              <div className="text-center text-7xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
                {item.student_number}
              </div>
              <p className="text-2xl text-center">Students</p>
            </div>
            <div className="">
              <div className="text-center text-7xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
                {item.total_success}%
              </div>
              <p className="text-2xl text-center">Total Success</p>
            </div>
            <div className="">
              <div className="text-center text-7xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
                {item.chief_expert}
              </div>
              <p className="text-2xl text-center">Chief Experts</p>
            </div>
            <div className="">
              <div className="text-center text-7xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
                {item.years_experience}
              </div>
              <p className="text-2xl text-center">Years of Experience</p>
            </div>{" "}
          </div>
        ))
      ) : (
        <p>Our Success.</p>
      )}
    </div>
  );
}
