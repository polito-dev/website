"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n/i18n";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Chessboard from "./components/Chessboard";
import DarkModeSwitch from "./components/DarkModeSwitch";
import LanguageSelector from "./components/LanguageSelector";

export default function HomePage() {
  const { t } = useTranslation();
  const [isCarouselFixed, setIsCarouselFixed] = useState(true);
  const chessboardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (chessboardRef.current) {
        const chessboardBottom = chessboardRef.current.getBoundingClientRect().bottom;
        setIsCarouselFixed(chessboardBottom > window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div
        className={`${"sm:pr-2 sm:mr-0 sm:ml-0 sm:break-words" +
          " lg:flex-1 lg:overflow-y-auto lg:min-h-screen lg:pr-20 lg:pl-2 lg:break-words lg:mr-[350px]"
          }`}
      >
        <header className="w-full flex justify-between">
          <img src="bitpolito-logo-light.png" className="icon-style-opposite !w-full !h-full pt-3 pl-4 mt-4"></img>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2 lg:hidden block mt-3 mb-3 mr-4">
              <DarkModeSwitch />
            </div>
            <div className="flex items-center gap-x-2 lg:hidden block">
              <LanguageSelector />
            </div>
          </div>
        </header>

        <h1 className="text-8xl my-2 mt-16 ml-4">{t("title")}</h1>
        <h1 className="text-xl my-2 mt-3 ml-4">{t("paragraph")}</h1>

        <div className="flex">
          <div ref={chessboardRef}>
            <Chessboard />
          </div>

          <div className={`w-[400px] h-full p-2 ml-auto transition-all duration-300 top-0 right-0 ${isCarouselFixed ? "fixed" : "absolute"}`}>
            <Carousel />
          </div>
        </div>
      </div>

      <div className="w-full bg-blue-dark dark:bg-white text-white dark:text-blue-dark font-bold flex flex-col items-center justify-center bottom-0 left-0 p-4">
        <Footer />
      </div>
    </div>
  );
}