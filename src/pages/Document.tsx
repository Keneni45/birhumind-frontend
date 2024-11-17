// export default function Document() {
//     return (
//         <div className="w-full grid lg:grid-cols-2 lg:gap-36 m-6 md:m-10 lg:m-16">
//             <div className="">
//                 <h5 className="text-lg text-main-red">Add documents you need:</h5>
//                 <ul className="grid mt-4">
//                     <li className="flex items-center">
//                         <input type="checkbox" id="bds" />
//                         <label htmlFor="bds" className="ml-2">BDS</label>
//                     </li>
//                     <li className="flex items-center">
//                         <input type="checkbox" id="business" />
//                         <label htmlFor="business" className="ml-2">business</label>
//                     </li>
//                     <li className="flex items-center">
//                         <input type="checkbox" id="business" />
//                         <label htmlFor="business" className="ml-2">business</label>
//                     </li>
//                     <li className="flex items-center">
//                         <input type="checkbox" id="business" />
//                         <label htmlFor="business" className="ml-2">business</label>
//                     </li>
//                     <li className="flex items-center">
//                         <input type="checkbox" id="business" />
//                         <label htmlFor="business" className="ml-2">business</label>
//                     </li>
//                 </ul>
//                 <h5 className="text-lg mt-16 text-main-red">Free Templates:</h5>
//                 {/* Todo Fix the shadows */}
//                 <div className="grid grid-cols-2 gap-6 md:gap-10 mt-4 justify-center">
//                     <div className="shadow-b shadow-lg border rounded-lg px-12 py-3">Geber</div>
//                     <div className="shadow-b shadow-lg border rounded-lg px-12 py-3">Geber</div>
//                     <div className="shadow-b shadow-lg border rounded-lg px-12 py-3">Geber</div>
//                     <div className="shadow-b shadow-lg border rounded-lg px-12 py-3">Geber</div>
//                 </div>
//             </div>
//             <div className="mt-8 lg:border lg:m-6 lg:p-4 lg:shadow-custom-lg">
//                 <form className="">
//                     <div className="mb-6">
//                         <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your name"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Highest Education Level
//                         </label>
//                         <div className="flex items-center mb-2">
//                             <input
//                                 className="mr-2 leading-tight"
//                                 id="no-formal"
//                                 type="radio"
//                                 name="education"
//                                 value="no-formal"
//                             />
//                             <label className="text-gray-700" htmlFor="primary">No Formal Education</label>
//                         </div>
//                         <div className="flex items-center mb-2">
//                             <input
//                                 className="mr-2 leading-tight"
//                                 id="primary"
//                                 type="radio"
//                                 name="education"
//                                 value="primary"
//                             />
//                             <label className="text-gray-700" htmlFor="primary">Primary Education</label>
//                         </div>
//                         <div className="flex items-center mb-2">
//                             <input
//                                 className="mr-2 leading-tight"
//                                 id="secondary"
//                                 type="radio"
//                                 name="education"
//                                 value="secondary"
//                             />
//                             <label className="text-gray-700" htmlFor="secondary">Secondary Education</label>
//                         </div>
//                         <div className="flex items-center mb-2">
//                             <input
//                                 className="mr-2 leading-tight"
//                                 id="degree"
//                                 type="radio"
//                                 name="education"
//                                 value="degree"
//                             />
//                             <label className="text-gray-700" htmlFor="primary">Degree</label>
//                         </div>
//                         <div className="flex items-center mb-2">
//                             <input
//                                 className="mr-2 leading-tight"
//                                 id="masterPlus"
//                                 type="radio"
//                                 name="education"
//                                 value="masterPlus"
//                             />
//                             <label className="text-gray-700" htmlFor="university">Masters Degree and Above</label>
//                         </div>
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name of Business or Institution</label>
//                         <input
//                             type="text"
//                             id="institution"
//                             name="institution"
//                             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Business/Institution Name"
//                         />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

import { useState } from "react";

export default function Document() {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [institution, setInstitution] = useState("");
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [selectedTemplates, setSelectedTemplates] = useState([]); // New state for selected templates

  // Handle checkbox for document selection
  const handleDocumentCheckboxChange = (e: any) => {
    const { id, checked } = e.target;
    setSelectedDocuments((prevSelectedDocuments: any) => {
      if (checked) {
        return [...prevSelectedDocuments, id];
      } else {
        return prevSelectedDocuments.filter((doc: any) => doc !== id);
      }
    });
  };

  const handleTemplateCheckboxChange = (e: any) => {
    const { id, checked } = e.target;
    setSelectedTemplates((prevSelectedTemplates: any) => {
      if (checked) {
        return [...prevSelectedTemplates, id];
      } else {
        return prevSelectedTemplates.filter((template: any) => template !== id);
      }
    });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      name,
      institution,
      education_level: "degree",
      document_type: selectedDocuments,
      selected_documents: selectedTemplates, // Array of selected document types
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed: " + data.detail);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="w-full grid lg:grid-cols-2 lg:gap-36 m-6 md:m-10 lg:m-16">
      <div className="">
        <h5 className="text-lg text-main-red">Add documents you need:</h5>
        <ul className="grid mt-4">
          <li className="flex items-center">
            {/* {["no-formal", "primary", "secondary", "degree", "masterPlus"].map()} */}
            <input
              type="checkbox"
              id="bds"
              onChange={handleDocumentCheckboxChange}
            />
            <label htmlFor="bds" className="ml-2">
              BDS
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="business"
              onChange={handleDocumentCheckboxChange}
            />
            <label htmlFor="business" className="ml-2">
              Business
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="tutorial"
              onChange={handleDocumentCheckboxChange}
            />
            <label htmlFor="tutorial" className="ml-2">
              Tutorial
            </label>
          </li>
        </ul>

        <h5 className="text-lg mt-16 text-main-red">Free Templates:</h5>
        <ul className="grid mt-4">
          {/* List of templates */}
          <li className="flex items-center">
            <input
              type="checkbox"
              id="template1"
              onChange={handleTemplateCheckboxChange}
            />
            <label htmlFor="template1" className="ml-2">
              Geber Template 1
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="template2"
              onChange={handleTemplateCheckboxChange}
            />
            <label htmlFor="template2" className="ml-2">
              Geber Template 2
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="template3"
              onChange={handleTemplateCheckboxChange}
            />
            <label htmlFor="template3" className="ml-2">
              Geber Template 3
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="template4"
              onChange={handleTemplateCheckboxChange}
            />
            <label htmlFor="template4" className="ml-2">
              Geber Template 4
            </label>
          </li>
        </ul>
      </div>
      <div className="mt-8 lg:border lg:m-6 lg:p-4 lg:shadow-custom-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
                    onChange={(e) => setEducation(e.target.value)}
                    checked={education === level}
                  />
                  <label className="text-gray-700" htmlFor={level}>
                    {level === "no-formal"
                      ? "No Formal Education"
                      : level === "primary"
                      ? "Primary Education"
                      : level === "secondary"
                      ? "Secondary Education"
                      : level === "degree"
                      ? "Degree"
                      : "Masters Degree and Above"}
                  </label>
                </div>
              )
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="institution"
              className="block text-gray-700 font-semibold mb-2">
              Name of Business or Institution
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Business/Institution Name"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
