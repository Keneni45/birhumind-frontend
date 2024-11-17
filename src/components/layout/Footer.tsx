//import { FaLocationArrow } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaPrint,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
// import map from "../../assets/map.png";

export default function Footer() {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };
  return (
    <footer className="bg-main-red px-6 py-8 text-white">
      <hr className="opacity-30 border-2 border-b my-4" />

      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between xl:ml-8 space-y-8 xl:space-y-0">
        {/* <!-- Left Section --> */}
        <div className="w-full xl:w-1/4">
          <h3 className="text-6xl font-bold mb-4">MENSH</h3>
          <p>
            Our digital Bds service aims to provide comprehensive support and
            guidance to help your business thrive in the digital landscape. Our
            approach focuses on empowering you with the tools and strategies to
            navigate the ever-evolving digital ecosystem effectively.
          </p>
        </div>

        {/* <!-- Middle Section --> */}
        <div className="w-full xl:w-auto flex flex-col items-center xl:items-start space-y-8 xl:space-y-0">
          <div className="flex flex-col items-center xl:items-start">
            <p className="flex gap-4 items-center my-3">
              <FaLocationDot className="mr-2" />
              <span className="text-center xl:text-left">
                345 Drive, Suite 4 • Charlottesville, CA, 12345
              </span>
            </p>
            <div className="flex flex-col xl:flex-row gap-5 items-center justify-between">
              <p className="flex gap-5 items-center my-3">
                <FaPhone />
                <span>(123) 456-7890</span>
              </p>
              <p className="flex gap-5 items-center my-3">
                <FaPrint />
                <span>(123) 456-7890</span>
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col xl:flex-row items-center">
            <span className="opacity-80"> Social Media </span>
            <span className="ml-5 flex gap-5">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaLinkedin size={24} />
              <FaYoutube size={24} />
              <FaInstagram size={24} />
            </span>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="w-full xl:w-[400px] xl:rounded-[14px]">
          {/* <img className="w-full h-auto rounded-[14px]" src={map} alt="map" /> */}
          {/* <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBOGWZCGDVp3kxp-tvZfwlaUAWXDF6nWec",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact> */}
        </div>
      </div>

      <hr className="opacity-30 border-2 border-b my-4" />

      <div className="flex flex-col xl:flex-row justify-between items-center mt-4 space-y-4 xl:space-y-0">
        <ul className="flex flex-wrap justify-around w-full xl:w-1/2 space-y-2 xl:space-y-0 ">
          <li>
            <a href="#">TUTORIAL</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">CONSULTANT</a>
          </li>
          <li>
            <a href="#">DOCUMENT</a>
          </li>
          <li>
            <a href="#">ACCESS TO FINANCE</a>
          </li>
        </ul>
        <p className="w-full xl:w-1/2 text-center xl:text-right opacity-70">
          Copyright &copy; 2024 Biruhminds.
        </p>
      </div>
    </footer>
  );
}
