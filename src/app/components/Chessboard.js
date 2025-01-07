import functions from "../functions";
import { useTranslation } from "react-i18next";

export const chessboardImages = [
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg"
];

const imageLinks = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

export default function Chessboard() {
    const { t } = useTranslation();
    const { visibleImages, loadMoreImages } = functions();

    return (
        <>
            <img src="bitpolito-logo-light.png" className="icon-style-opposite !w-64 !h-16 pt-3 pl-4 mt-4"></img>

            <h1 className="text-7xl my-2 mt-16 ml-4">{t("title")}</h1>
            <h2 className="text-2xl my-2 mt-3 ml-4">{t("paragraph")}</h2>

            <div className="flex justify-center space-x-2 mb-3 pt-16 pl-4">
                <a href="#" className="btn-b rounded-full">{t("events")}</a>
                <a href="#" className="btn-b rounded-full">{t("podcast")}</a>
                <a href="#" className="btn-b rounded-full">{t("projects")}</a>
            </div>

            <div className="flex-shrink-0 grid grid-cols-2 gap-4 p-4">
                {chessboardImages.slice(0, visibleImages).map((src, index) => (
                    <a key={index} href={imageLinks[index]}>
                        <img src={src} className="w-128 h-128 bg-white p-1" />
                    </a>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                {visibleImages < chessboardImages.length && (
                    <button onClick={loadMoreImages} className="font-bold">
                        {t("load-more")}
                    </button>
                )}
            </div>
        </>
    );
}