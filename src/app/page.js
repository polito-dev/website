"use client";

import { useTranslation } from "react-i18next";
import "./i18n/i18n";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Chessboard from "./components/Chessboard";
import functions from "./functions";

export default function HomePage() {
  const { t } = useTranslation();
  const { isBottom, footerHeight, footerRef, contentRef, scrollToTop } = functions();

  return (
    <div className="flex">
      <div ref={contentRef} className="flex-1 overflow-y-auto min-h-screen pr-20 pl-2 break-words mr-[350px]" style={{ paddingBottom: `${footerHeight}px` }}>
        <Chessboard />

        {isBottom && (
          <div className="fixed bottom-[calc(100vh-100px)] left-7 z-20" style={{ bottom: `${footerHeight + 15}px` }}>
            <button onClick={scrollToTop} className="btn-w">
              <img src={"icons/back-top-light.png"} className="icon-style-opposite"></img>
              {t("top")}
            </button>
          </div>
        )}
      </div>

      <div className={`w-[400px] h-screen flex flex-col items-end justify-end p-2 ml-auto fixed right-0 top-0 z-20 ${isBottom ? 'hidden' : 'block'}`}>
        <Carousel />
      </div>

      {isBottom && (
        <div ref={footerRef} className="w-full bg-blue-700 dark:bg-white text-white dark:text-blue-700 font-bold p-4 fixed bottom-0 left-0 flex flex-col items-center justify-center space-y-4 z-10">
          <Footer />
        </div>
      )}
    </div>
  );
}