import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ThankYou() {
    return (
        <div className="w-full grid">
            <h1 className="border opacity-5 text-[100px] sm:text-[140px] lg:text-[360px] font-bold text-center">MENSH</h1>
            <div className="relative bottom-20 sm:bottom-28 lg:bottom-60 grid justify-center">
                <h2 className="mt-2 text-center text-4xl sm:text-6xl lg:text-8xl font-bold">Thank You</h2>
                <h4 className="text-center">For Getting In Touch With Us.</h4>
                <Link to="/" className="my-4 bg-main-red text-white font-bold hover:bg-dark-red px-8 py-3 text-center rounded-3xl">Back To Home</Link>
                <div className="mt-4 flex gap-8 justify-center text-main-red">
                    <FaFacebook size={28}/>
                    <FaTwitter size={28}/>
                    <FaInstagram size={28}/>
                </div>
            </div>
        </div>
    )
}