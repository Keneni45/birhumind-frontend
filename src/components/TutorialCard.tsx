import { Link } from "react-router-dom";
import TutorialImg from "../assets/tutorial.png";

// interface tutorialItem {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }
export default function TutorialCard(props: {
  new?: boolean;
  title?: string;
  description?: string;
  img?: string;
}) {
  return (
    <div className="flex flex-col rounded-lg shadow-md p-4 md:p-8 border border-gray-300">
      {props.new && (
        <span className="flex px-3 py-1 rounded-md font-medium w-14 h-8 text-white bg-dark-red">
          New
        </span>
      )}
      <Link to="i2343d" className="text-2xl font-bold mt-4">
        {props.title}
      </Link>
      <p className="opacity-80 mt-2">{props.description}</p>
      <img
        src={props.img ?? TutorialImg}
        alt="tutorial"
        className="w-full mt-4"
      />
    </div>
  );
}
