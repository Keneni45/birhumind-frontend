import { FaHandPointRight } from "react-icons/fa6";
import TutorialImg from '../assets/tutorial.png';
import TutorialCard from "../components/TutorialCard";

export default function TutorialDetail() {
    return (
        <div className="grid">
            <div className="grid my-4 mx-4 lg:grid-cols-2">
                <div className="grid mx-4 lg:my-10 lg:mx-14">
                    <h1 className="text-2xl font-bold">Constructive and destructive waves</h1>
                    <p className="mt-4 font-bold">1200$</p>
                    <p className="mt-4 text-sm opacity-90">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor
                        do amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <p className="mt-4">
                        Build your Mobile and Web Development expertise
                        This course is part of the Meta Back-End Developer Professional Certificate
                        When you enroll in this course, you'll also be enrolled in this Professional Certificate
                    </p>
                    <ul className="mt-4 text-sm">
                        <li className="opacity-90 flex items-center gap-3">
                            <FaHandPointRight />
                            Learn new concepts from industry experts
                        </li>
                        <li className="opacity-90 flex items-center gap-3">
                            <FaHandPointRight />
                            Gain a foundational understanding of a subject or tool
                        </li>
                        <li className="opacity-90  flex items-center gap-3">
                            <FaHandPointRight />
                            Develop job-relevant skills with hands-on projects
                        </li>
                        <li className="opacity-90 flex items-center gap-3">
                            <FaHandPointRight />
                            Earn a shareable career certificate from Meta
                        </li>
                    </ul>
                </div>
                <div className="grid m-4 lg:p-10">
                    <img src={TutorialImg} className="w-full shadow" />
                </div>
            </div>
            <div className="">
                <p className="mx-8 lg:mx-14">
                    The Capstone project enables you to demonstrate multiple skills by solving an authentic real-world problem.
                    You’ll test your abilities in full-stack back-end development in a real-life scenario by composing a Django web app.
                    Each module includes a brief recap of, and links to, content that you have covered in previous courses in this program.
                    You will use clean and bug-free coding to create a Django web server with multiple API endpoints and connect it to a MySQL database.
                    You’ll also create a template system driven by Django views. B​y the end of the course you will be able to:
                    Compose a backend application using multiple skills • Use Django to serve static HTML content • Commit the project to a Git repository  •
                    Connect the backend to the database • Implement the menu and table booking APIs • Set up user registration and authentication •
                    Test the application with unit tests and Insomnia • Synthesize the skills from this course and evaluate other
                </p>
            </div>
            <div className="mx-8 lg:mx-14 flex my-8 mr-8">
                <button className="border border-main-red text-black font-bold hover:bg-main-red hover:text-white px-12 py-2 lg:px-16 lg:py-3 rounded-3xl">Register</button>
            </div>
            <div className="grid mx-8 lg:mx-14 mb-4">
                <h2 className="text-2xl font-bold ">Other Tutorials</h2>
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    <TutorialCard
                        new={true}
                        title="Constructive and destructive waves"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                        img={TutorialImg}
                    />
                    <TutorialCard
                        new={true}
                        title="Constructive and destructive waves"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                        img={TutorialImg}
                    />
                    <TutorialCard
                        new={true}
                        title="Constructive and destructive waves"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                        img={TutorialImg}
                    />
                </div>
            </div>
        </div>
    )
}