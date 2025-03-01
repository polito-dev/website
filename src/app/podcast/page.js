"use client";

import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import functions from "../functions";
import Footer from "../components/Footer";
import DarkModeSwitch from "../components/DarkModeSwitch";
import LanguageSelector from "../components/LanguageSelector";

export default function Podcast() {
  const { t } = useTranslation();
  const { isBottom, footerHeight, footerRef, scrollToTop } = functions();

  return (
    <div className="flex flex-col min-h-screen">
      <div className={`${"sm:pr-2 sm:mr-0 sm:ml-0 sm:break-words" +
        " lg:flex-1 lg:overflow-y-auto lg:min-h-screen lg:pr-20 lg:pl-2 lg:break-words lg:mr-[350px]"
        }`} style={{ paddingBottom: `${footerHeight}px` }}
      >

        <header className="w-full flex justify-between">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 lg:hidden block mt-3 mb-3 mr-4">
              <DarkModeSwitch />
            </div>
            <div className="flex items-center space-x-2 lg:hidden block">
              <LanguageSelector />
            </div>
          </div>
        </header>

        <div className="flex justify-center mb-6">
          <iframe
            src="https://open.spotify.com/show/3xXqSrkyLloGhTozWMnuhH"
            width="100%"
            height="380"
            allow="encrypted-media"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        {isBottom && (
          <div className="fixed bottom-[calc(100vh-100px)] left-7 z-20" style={{ bottom: `${footerHeight + 15}px` }}>
            <button onClick={scrollToTop} className="btn-w">
              <img src={"icons/back-top-light.png"} className="icon-style-opposite"></img>
              {t("top")}
            </button>
          </div>
        )}
      </div>

      {isBottom && (
        <div ref={footerRef} className="w-full bg-blue-700 dark:bg-white text-white dark:text-blue-700 font-bold p-4 fixed bottom-0 left-0 flex flex-col items-center justify-center space-y-4 z-10">
          <Footer />
        </div>
      )}
    </div>
  );
}