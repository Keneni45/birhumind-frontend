import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import biruhLogo from "../../assets/Image3.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  // make list of navigation list object array title and link
  const navigation = [
    {
      title: t("Home"),
      link: "",
    },
    {
      title: t("Tutorials"),
      link: "/tutorial",
    },
    {
      //title: "News",
      title: t("News"),
      link: "/news",
    },
    {
      //   title: "Consultancy",
      title: t("Consultancy"),
      link: "/consultancy",
    },
    {
      title: t("Document"),
      link: "/document",
    },
    {
      title: t("Access to Finance"),
      link: "/finance-linkage",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-custom">
      <div className="w-full">
        <nav className="relative flex items-start justify-between gap-6 pt-4 xs:pt-0 mx-auto lg:justify-between xl:px-0">
          <div className="flex flex-grow flex-col">
            {/* Mensh  */}
            <div className="mt-2 flex flex-wrap items-center justify-between w-full lg:w-auto xs:py-4">
              <div className="w-full flex items-center space-x-2 text-2xl font-medium text-main-red">
                <hr className="w-10 border-2 border-main-red" />
                <h1 className="px-4 font-bold">MENSH</h1>
                <hr className="flex flex-grow border-2 border-main-red" />
                <p className="text-lg xs:text-sm xs:hidden">Powered By</p>
              </div>
            </div>

            {/* Mobile Menu list */}
            {isOpen && (
              <React.Fragment>
                <div className="flex flex-wrap w-full my-5 justify-center lg:hidden">
                  <hr className=" border flex flex-grow opacity-10 relative left-10 border-main-red" />

                  {navigation.map((item, index) => {
                    console.log(item.link);
                    return (
                      <Link
                        key={index}
                        to={`${item.link}/`}
                        className="w-full px-4 py-2 ml-10 text-main-red  rounded-md hover:text-dark-red focus:text-dark-red focus:outline-none">
                        {item.title.toUpperCase()}
                      </Link>
                    );
                  })}
                  <hr className="border flex flex-grow opacity-10 relative left-10 border-main-red" />

                  <div className="w-full flex items-center gap-8 px-6 py-2 mt-3 text-center bg-white rounded-md">
                    <p className="text-lg xs:text-sm xl:hidden lg:hidden text-main-red">
                      Powered By
                    </p>
                    <div className="mr-3 space-x-4 nav__item mb-8 xl:hidden lg:hidden">
                      <a href="/">
                        <img
                          src={biruhLogo}
                          className="h-auto max-w-full max-h-[70px] xs:w-20"
                          alt="Biruh Minds"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}

            {/* Desktop Menu list */}
            <div className="hidden text-center lg:flex lg:flex-grow lg:items-center">
              <ul className="items-center justify-center flex-1 pt-6 list-none lg:pt-0 lg:flex">
                {navigation.map((menu, index) => (
                  <li className="mr-3 nav__item" key={index}>
                    <Link
                      to={`${menu.link}/`}
                      className="inline-block px-4 py-2 text-main-red text-sm font-bold no-underline rounded-md hover:text-dim-red focus:text-dark-red focus:outline-none">
                      {menu.title.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Biruh Minds logo */}
          {/* <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                        <a href="/" >
                            <img src={biruhLogo} className="content-fit" width="100%" />
                        </a>
                    </div> */}
          <div className="mr-3 space-x-4 lg:flex nav__item mb-8 xs:hidden">
            <a href="/">
              <img
                src={biruhLogo}
                className="h-auto max-w-full max-h-[70px] xs:w-20"
                alt="Biruh Minds"
              />
            </a>
          </div>

          <button
            aria-label="Toggle Menu"
            className="px-2 py-1 mt-6 mr-4 bottom-44 ml-auto text-dark-red rounded-md lg:hidden hover:text-dim-500 focus:text-dark-red focus:bg-indigo-100 focus:outline-none"
            onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
