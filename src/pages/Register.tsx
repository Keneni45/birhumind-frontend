// import { useState } from "react";
// import axios from "axios";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("M");
//   const [educationLevel, setEducationLevel] = useState("P");

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const userData = {
//       username,
//       age,
//       gender,
//       education_level: educationLevel,
//     };
//     try {
//       await axios.post("http://localhost:8000/register/", userData);
//       alert("User registered successfully!");
//     } catch (error) {
//       console.error("There was an error registering the user!", error);
//     }
//   };
//   return (
//     <div className="w-full mt-5 mx-4 md:mx-14">
//       <div className="grid">
//         <h1 className="my-2 text-center text-4xl font-bold bg-gradient-to-r from-[rgba(195,0,0,1)] to-[rgba(255,146,146,1)] bg-clip-text text-transparent">
//           Registration
//         </h1>
//         <form className="mx-6" onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               name="name"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-semibold mb-2">
//               Age
//             </label>
//             <input
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               name="age"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Value must be number"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Gender
//             </label>
//             <div className="flex items-center mb-2">
//               <input
//                 className="mr-2 leading-tight"
//                 id="male"
//                 type="radio"
//                 name="gender"
//                 value="male"
//               />
//               <label className="text-gray-700" htmlFor="male">
//                 Male
//               </label>
//             </div>
//             <div className="flex items-center mb-2">
//               <input
//                 className="mr-2 leading-tight"
//                 id="female"
//                 type="radio"
//                 name="gender"
//                 value="female"
//               />
//               <label className="text-gray-700" htmlFor="female">
//                 Female
//               </label>
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Highest Education Level
//             </label>
//             <div className="flex items-center mb-2">
//               <input
//                 className="mr-2 leading-tight"
//                 id="no-formal"
//                 type="radio"
//                 name="education"
//                 value="no-formal"
//               />
//               <label className="text-gray-700" htmlFor="primary">
//                 No Formal Education
//               </label>
//             </div>
//             <div className="flex items-center mb-2">
//               <input
//                 className="mr-2 leading-tight"
//                 id="primary"
//                 type="radio"
//                 name="education"
//                 value="primary"
//               />
//               <label className="text-gray-700" htmlFor="primary">
//                 Primary Education
//               </label>
//             </div>
//             <div className="flex items-center mb-2">
//               <input
//                 className="mr-2 leading-tight"
//                 id="secondary"
//                 type="radio"
//                 name="education"
//                 value="secondary"
//               />
//               <label className="text-gray-700" htmlFor="secondary">
//                 Secondary Education
//               </label>
//             </div>
//             <div className="flex items-center mb-2">
//               <input
//                 className="mr-2 leading-tight"
//                 id="degree"
//                 type="radio"
//                 name="education"
//                 value="degree"
//               />
//               <label className="text-gray-700" htmlFor="primary">
//                 Degree
//               </label>
//             </div>
//             <div className="flex items-center mb-2">
//               <input
//                 className="mr-2 leading-tight"
//                 id="masterPlus"
//                 type="radio"
//                 name="education"
//                 value="masterPlus"
//               />
//               <label className="text-gray-700" htmlFor="university">
//                 Masters Degree and Above
//               </label>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import axios from "axios";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("M"); // Use "M" for male
//   const [educationLevel, setEducationLevel] = useState("no-formal"); // Default value

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const userData = {
//       username: "",
//       age: "",
//       gender,
//       education_level: educationLevel,
//     };
//     try {
//       await axios.post("http://localhost:8000/registration/", userData);
//       alert("User registered successfully!");
//     } catch (error) {
//       console.error("There was an error registering the user!", error);
//     }
//   };

//   return (
//     <div className="w-full mt-5 mx-4 md:mx-14">
//       <div className="grid">
//         <h1 className="my-2 text-center text-4xl font-bold bg-gradient-to-r from-[rgba(195,0,0,1)] to-[rgba(255,146,146,1)] bg-clip-text text-transparent">
//           Registration
//         </h1>
//         <form className="mx-6" onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="age"
//               className="block text-gray-700 font-semibold mb-2">
//               Age
//             </label>
//             <input
//               id="age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your age"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Gender
//             </label>
//             <div className="flex items-center mb-2">
//               <input
//                 className="mr-2 leading-tight"
//                 id="male"
//                 type="radio"
//                 name="gender"
//                 value="M" // Use "M" for male
//                 checked={gender === "M"}
//                 onChange={(e) => setGender(e.target.value)}
//               />
//               <label className="text-gray-700" htmlFor="male">
//                 Male
//               </label>
//             </div>
//             <div className="flex items-center mb-2">
//               <input
//                 className="mr-2 leading-tight"
//                 id="female"
//                 type="radio"
//                 name="gender"
//                 value="F" // Use "F" for female
//                 checked={gender === "F"}
//                 onChange={(e) => setGender(e.target.value)}
//               />
//               <label className="text-gray-700" htmlFor="female">
//                 Female
//               </label>
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Highest Education Level
//             </label>
//             {["no-formal", "primary", "secondary", "degree", "masterPlus"].map(
//               (level) => (
//                 <div className="flex items-center mb-2" key={level}>
//                   <input
//                     className="mr-2 leading-tight"
//                     id={level}
//                     type="radio"
//                     name="education"
//                     value={level}
//                     checked={educationLevel === level}
//                     onChange={(e) => setEducationLevel(e.target.value)}
//                   />
//                   <label className="text-gray-700" htmlFor={level}>
//                     {level.charAt(0).toUpperCase() +
//                       level.slice(1).replace(/([A-Z])/g, " $1")}{" "}
//                     {/* Format label */}
//                   </label>
//                 </div>
//               )
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("M");
  const [educationLevel, setEducationLevel] = useState("no-formal");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userData = {
      username,
      age,
      gender,
      education_level: educationLevel,
    };
    try {
      await axios.post("http://localhost:8000/api/registration/", userData);
      alert("User registered successfully!");
    } catch (error) {
      console.error("There was an error registering the user!", error);
    }
  };

  return (
    <div className="w-full mt-5 mx-4 md:mx-14">
      <div className="grid">
        <h1 className="my-2 text-center text-4xl font-bold bg-gradient-to-r from-[rgba(195,0,0,1)] to-[rgba(255,146,146,1)] bg-clip-text text-transparent">
          Registration
        </h1>
        <form className="mx-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="age"
              className="block text-gray-700 font-semibold mb-2">
              Age
            </label>
            <input
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <div className="flex items-center mb-2">
              <input
                className="mr-2 leading-tight"
                id="male"
                type="radio"
                name="gender"
                value="M"
                checked={gender === "M"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="text-gray-700" htmlFor="male">
                Male
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                className="mr-2 leading-tight"
                id="female"
                type="radio"
                name="gender"
                value="F"
                checked={gender === "F"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="text-gray-700" htmlFor="female">
                Female
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Highest Education Level
            </label>
            {["no-formal", "primary", "secondary", "degree", "masterPlus"].map(
              (level) => (
                <div className="flex items-center mb-2" key={level}>
                  <input
                    className="mr-2 leading-tight"
                    id={level}
                    type="radio"
                    name="education"
                    value={level}
                    checked={educationLevel === level}
                    onChange={(e) => setEducationLevel(e.target.value)}
                  />
                  <label className="text-gray-700" htmlFor={level}>
                    {level.charAt(0).toUpperCase() +
                      level.slice(1).replace(/([A-Z])/g, " $1")}{" "}
                  </label>
                </div>
              )
            )}
          </div>

          {/* <button
            type="submit"
            className="w-300px p-3 mb-20 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Register
          </button> */}
          <button
            type="submit"
            className="w-full mb-10 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
