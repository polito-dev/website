import { useState } from "react";
import { useTranslation } from "react-i18next";
// import Link from "next/link";
import chessboardImages from '../data/chessboardImages.json';

/**
 * @constant {Array[]} layout
 * @description Array representing the layout of the chessboard. Each row contains an array of objects defining
 * the type of content, the span, the image source and the link associated with the image
 */
const layout = [
    [ // page 1
        { type: 'image', span: 1, src: chessboardImages[0].src, link: chessboardImages[0].link },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[2].src, link: chessboardImages[2].link },
        { type: 'image', span: 1, src: chessboardImages[3].src, link: chessboardImages[3].link },
        { type: 'image', span: 1, src: chessboardImages[4].src, link: chessboardImages[4].link }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[6].src, link: chessboardImages[6].link }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[7].src, link: chessboardImages[7].link },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [ // page 2
        { type: 'image', span: 1, src: chessboardImages[9].src, link: chessboardImages[9].link },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[11].src, link: chessboardImages[11].link },
        { type: 'image', span: 1, src: chessboardImages[12].src, link: chessboardImages[12].link },
        { type: 'image', span: 1, src: chessboardImages[13].src, link: chessboardImages[13].link }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[15].src, link: chessboardImages[15].link }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[16].src, link: chessboardImages[16].link },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [ // page 3
        { type: 'image', span: 1, src: chessboardImages[18].src, link: chessboardImages[18].link },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[20].src, link: chessboardImages[20].link },
        { type: 'image', span: 1, src: chessboardImages[21].src, link: chessboardImages[21].link },
        { type: 'image', span: 1, src: chessboardImages[22].src, link: chessboardImages[22].link }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[24].src, link: chessboardImages[24].link }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[25].src, link: chessboardImages[25].link },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [ // page 4
        { type: 'image', span: 1, src: chessboardImages[27].src, link: chessboardImages[27].link },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[30].src, link: chessboardImages[30].link }
    ]
];

/**
 * Chessboard component renders a grid layout with dynamic rows and interactive elements.
 * It includes a grid of items and a "Load More" button to display additional rows.
 *
 * @component
 * @returns {JSX.Element} The rendered Chessboard component.
 * @author BitPolito Team : polito-dev
 * @version 1.0.0
 * @example <Chessboard />
 *
 * @description
 * - The component displays a grid of images and charts in a responsive layout.
 * - The "Load More" button allows users to reveal more rows (4) of items dynamically.
 *  
 * @dependencies
 * - 'useTranslation': React hook for internationalization (multiple language support).
 *
 * @function
 * @name Chessboard
 */
export default function Chessboard() {
    const { t } = useTranslation();

    /**
     * @state {number} visibleRows
     * @description The number of rows to be displayed in the chessboard
     */
    const [visibleRows, setVisibleRows] = useState(4);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-x-3 mb-3 pt-8 sm:pt-12 lg:pt-16">
                {["events", "podcast", "projects", "others"].map((key) => (
                    <div key={key} className="relative group">
                        <a className="cursor-not-allowed btn-b rounded-full px-3 sm:px-5 text-sm sm:text-base">
                            {t(key)}
                        </a>
                    </div>
                ))}
            </div>

            {/* Chessboard grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 p-2 sm:p-4 lg:p-5">
                {layout.slice(0, visibleRows).flatMap((row, rowIndex) =>
                    row.map((item, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`${item.span === 2
                                ? 'col-span-1 sm:col-span-2'
                                : 'col-span-1'
                                } transition-all duration-300 ease-in-out hover:opacity-95 hover:scale-[1.02] min-h-[350px]`}
                        >
                            {item.type === 'chart' ? (
                                <img
                                    src="#"
                                    alt="Chart placeholder"
                                    className="chessboard"
                                />
                            ) : (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full"
                                >
                                    <img
                                        src={item.src}
                                        alt={`Chessboard item ${rowIndex}-${colIndex}`}
                                        className="chessboard"
                                        loading="lazy"
                                    />
                                </a>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 py-8 sm:py-12">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="btn-w flex items-center gap-2"
                >
                    <img
                        src="/icons/back-top-light.png"
                        alt="Back to top"
                        className="icon-style-opposite w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span>{t("top")}</span>
                </button>

                {visibleRows < layout.length && (
                    <button
                        onClick={() => setVisibleRows(prev => prev + 4)}
                        className="font-bold hover:opacity-80 transition-opacity"
                    >
                        {t("load-more")}
                    </button>
                )}
                {visibleRows >= layout.length && (
                    <button
                        onClick={() => setVisibleRows(4)}
                        className="font-bold hover:opacity-80 transition-opacity"
                    >
                        {t("reset")}
                    </button>
                )}
            </div>
        </div>
    );
}