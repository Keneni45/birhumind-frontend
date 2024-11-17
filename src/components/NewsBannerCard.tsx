import { FaNeos } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NewsBannerCardProps {
  id: number | string;
  title: string;
  subHead: string;
}
export default function NewsBannerCard({
  id,
  title,
  subHead,
}: NewsBannerCardProps) {
  return (
    <div className="max-w-full p-4 rounded-xl flex justify-between items-center border border-red-300 bg-red-50">
      <p className="flex flex-col">
        <Link to={`news/${id}`} className="text-xl mb-3 text-slate-700 font-bold">{title}</Link>
        <span className="text-sm text-slate-600">{subHead}</span>
      </p>
      <p>
        <FaNeos className="text-main-red font-bold" size={45} />
      </p>
    </div>
  );
}
