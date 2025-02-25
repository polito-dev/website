import { useState } from "react";
import { useTranslation } from "react-i18next";

const chessboardImages = [
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "#",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "#",
    "/bitpolito-bitgen-3.jpg",
    "#",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "#",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-bitgen-3.jpg",
    "#",
    "/bitpolito-bitgen-3.jpg"
];

const imageLinks = [
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#"
];

const layout = [
    [
        { type: 'chart', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[0], link: imageLinks[0] }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[1], link: imageLinks[1] },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[3], link: imageLinks[3] },
        { type: 'image', span: 1, src: chessboardImages[4], link: imageLinks[4] },
        { type: 'image', span: 1, src: chessboardImages[5], link: imageLinks[5] }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[7], link: imageLinks[7] }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[9], link: imageLinks[9] }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[10], link: imageLinks[10] },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[12], link: imageLinks[12] },
        { type: 'image', span: 1, src: chessboardImages[13], link: imageLinks[13] },
        { type: 'image', span: 1, src: chessboardImages[14], link: imageLinks[14] }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[16], link: imageLinks[16] }
    ]
];

export default function Chessboard() {
    const { t } = useTranslation();
    const [visibleRows, setVisibleRows] = useState(4);

    const loadMoreRows = () => {
        setVisibleRows((prev) => prev + 4);
    };

    return (
        <>
            <div className="flex justify-center space-x-2 mb-3 pt-16 pl-4">
                <a href="#" className="btn-b rounded-full">{t("events")}</a>
                <a href="#" className="btn-b rounded-full">{t("podcast")}</a>
                <a href="#" className="btn-b rounded-full">{t("projects")}</a>
                <a href="#" className="btn-b rounded-full">{t("others")}</a>
            </div>

            <div className="grid grid-cols-3 gap-4 p-5 w-full max-w-5xl mx-auto">
                {layout.slice(0, visibleRows).flatMap((row, rowIndex) =>
                    row.map((item, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`${item.span === 2 ? 'col-span-2' : 'col-span-1'} h-80`}
                        >
                            {item.type === 'chart' ? (
                                <img src="#" className="chessboard"></img>
                            ) : (
                                <a href={item.link} className="block w-full h-full">
                                    <img
                                        src={item.src}
                                        className="chessboard"
                                    />
                                </a>
                            )}
                        </div>
                    ))
                )}
            </div>

            <div className="flex justify-center mt-4">
                {visibleRows < layout.length && (
                    <button onClick={loadMoreRows} className="font-bold">
                        {t("load-more")}
                    </button>
                )}
            </div>
            <div className="mb-16"></div>
        </>
    );
}