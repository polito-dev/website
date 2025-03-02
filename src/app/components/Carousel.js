"use client";

import { useTranslation } from "react-i18next";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSelector from "./LanguageSelector";
import functions from "../functions";
import Link from "next/link";

export const carouselImages = [
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-missione-praga.png",
    "/DRAFT-bitpolito-panel-mining.jpg",
    "/DRAFT-bitpolito-partnership-braiins.jpg"
];

const imageLinks = [
    "",
    "",
    "",
    ""
];

export default function Carousel() {
    const { t } = useTranslation();
    const { currentImage, progress, fade, changeImage, arrowsVisible, showArrows } = functions();

    return (
        <div className="flex-1 flex flex-col items-center justify-center w-full">
            <header className="w-full flex justify-center">
                <div className="flex items-center space-x-7 lg:flex hidden">
                    <DarkModeSwitch />
                    <LanguageSelector />
                </div>
            </header>

            <div className="flex justify-between space-x-8 mb-3 mt-7">
                <a href="#" className="transition-all duration-200 hover:scale-105 font-bold">{t("projects")}</a>
                <Link href="/podcast" className="transition-all duration-200 hover:scale-105 font-bold">{t("podcast")}</Link>
                <a href="#" className="transition-all duration-200 hover:scale-105 font-bold">{t("about")}</a>
            </div>
            <div className="w-full h-1 bg-white dark:bg-blue-700 mb-2">
                <div
                    className="h-full bg-blue-700 dark:bg-white"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div
                onMouseEnter={() => showArrows(true)}
                onMouseLeave={() => showArrows(false)}
            >
                <button
                    onClick={() => changeImage(-1)}
                    className={`arrow !left-1 ${arrowsVisible ? 'opacity-100' : 'opacity-0'}`}>
                    &lt;
                </button>
                <a href={imageLinks[currentImage]} target="_blank" rel="noopener noreferrer" className="max-w-full w-full">
                    <img
                        src={carouselImages[currentImage]}
                        className={`max-w-full w-full transition-opacity duration-700 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                </a>
                <button
                    onClick={() => changeImage(1)}
                    className={`arrow !right-1 ${arrowsVisible ? 'opacity-100' : 'opacity-0'}`}>
                    &gt;
                </button>
            </div>
            <footer className="w-full flex justify-between space-x-3 mt-5">
                <a href="https://t.me/BitPolitoForum" target="_blank" rel="noopener noreferrer" className="btn-w flex items-center space-x-2">
                    <img src={"icons/bitpolito-icon-social-telegram.svg"} className="icon-style-opposite"></img>
                    <span>{t("telegram")}</span>
                </a>
                <a href="#" className="btn-b rounded-md border-blue-700">
                    <img src="icons/donate-light.png" className="icon-style !w-6 !h-6"></img>
                    {t("donate")}
                </a>
            </footer>
        </div>
    );
}