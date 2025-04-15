"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";

export const carouselImages = [
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-missione-praga.png",
    "/DRAFT-bitpolito-panel-mining.jpg",
    "/DRAFT-bitpolito-partnership-braiins.jpg"
];

const imageLinks = ["", "", "", ""];

export default function Carousel() {
    const { t } = useTranslation();
    const [currentImage, setCurrentImage] = useState(0);
    const [progress, setProgress] = useState(0);
    const [fade, setFade] = useState(true);
    const [arrowsVisible, setArrowsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const descriptionImages = [
        t("alt-img-1"),
        t("alt-img-2"),
        t("alt-img-3"),
        t("alt-img-4"),
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % carouselImages.length);
                setProgress(0);
                setFade(true);
            }, 100);
        }, 15000);

        const progressInterval = setInterval(() => {
            if (fade) {
                setProgress((prev) => (prev + 1) % 100);
            }
        }, 150);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [fade]);

    const changeImage = (direction) => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + direction + carouselImages.length) % carouselImages.length);
            setProgress(0);
            setFade(true);
        }, 100);
    };

    const showArrows = (visible) => {
        setArrowsVisible(visible);
    };

    // Disable scrolling when the popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    // Allows to paragraph in the popup to go to a new line
    const newLine = (text) =>
        text.split(". ").map((sentence, i) => (
            <span key={i}>
                {sentence}.
                <br />
            </span>
        ));

    return (
        <div className="flex-1 flex flex-col items-center justify-center w-full">
            <header className="w-full flex justify-center">
                <div className="flex items-center gap-x-7 lg:flex hidden">
                    <DarkModeSwitch />
                    <LanguageSelector />
                </div>
            </header>

            <div className="flex justify-between gap-x-8 mb-3 mt-7">
                <a href="#" className="transition-all duration-200 hover:scale-105 font-bold">{t("projects")}</a>
                <Link href="/podcast" className="transition-all duration-200 hover:scale-105 font-bold">{t("podcast")}</Link>
                <a href="#" className="transition-all duration-200 hover:scale-105 font-bold">{t("about")}</a>
            </div>

            <div className="w-full h-1 bg-white dark:bg-blue-dark mb-2">
                <div
                    className="h-full bg-blue-dark dark:bg-white"
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
                        title={descriptionImages[currentImage]}
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

            <footer className="w-full flex justify-between gap-x-3 mt-5">
                <a href="https://t.me/BitPolitoForum" target="_blank" rel="noopener noreferrer" className="btn-w !px-8">
                    <img src={"icons/bitpolito-icon-social-telegram.svg"} className="icon-style-opposite"></img>
                    <span>{t("telegram")}</span>
                </a>
                <button onClick={() => setIsOpen(true)} className="btn-b rounded-md !px-7">
                    <img src="icons/donate-light.png" className="icon-style !w-6 !h-6"></img>
                    {t("donate")}
                </button>
            </footer>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="relative bg-white dark:bg-blue-dark p-9 rounded-3xl w-128 h-128">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 btn-b rounded-full"
                        >
                            ⨉
                        </button>

                        <h1 className="text-5xl font-bold mb-4 dark:text-white">{t("popup-title")}</h1>
                        <p className="text-xl mb-6 dark:text-white">{newLine(t("popup-paragraph"))}</p>

                        <div className="flex items-center">
                            <img src="#" className="w-60 h-64 object-cover"></img>
                            <div className="flex flex-col ml-12 gap-y-7">
                                <a href="https://t.me/bitciccio" target="_blank" rel="noopener noreferrer" className="btn-w">
                                    <img src={"icons/bitpolito-icon-social-telegram.svg"} className="icon-style-opposite"></img>
                                    <span>@Bitciccio</span>
                                </a>
                                <a href='mailto: francesco.pelle@studenti.polito.it' target="_blank" rel="noopener noreferrer" className="btn-w">
                                    <img src="icons/bitpolito-icon-mail.svg" className="icon-style-opposite"></img>
                                    francesco.pelle@studenti.polito.it
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}