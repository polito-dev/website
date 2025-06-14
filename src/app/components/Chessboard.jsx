import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import Link from "next/link";
import chessboardImages from '../data/chessboardImages.json';

const chartRow = [
    { type: 'image', span: 1 },
    { type: 'chart', span: 2, src: null, link: null }
];

const row1 = [
    { type: 'image', span: 1 },
    { type: 'box', span: 2, src: null, link: null }
];

const row2 = [
    { type: 'image', span: 1 },
    { type: 'image', span: 1 },
    { type: 'image', span: 1 }
];

const row3 = [
    { type: 'box', span: 2, src: null, link: null },
    { type: 'image', span: 1 }
];

/**
 * @constant {Array[]} layoutTemplate
 * @description 
 * An array representing the layout template of chessboard. Each "page" 
 * is composed of rows (chartRow, row1, row2, row3), which are repeated across multiple pages.
 * 
 */
const layoutTemplate = [
    // page 1
    chartRow,
    row2,
    row3,
    row1,
    // page 2
    row1,
    row2,
    row3,
    row1,
    // page 3
    row1,
    row2,
    row3,
    row1,
    // page 4
    row1,
    row3
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

    /**
     * @constant {Array[]} layout
     * @description Array representing the layout of the chessboard. Each row contains an array of objects defining
     * the type of content, the span, the image source and the link associated with the image
     */
    const [layout, setLayout] = useState([]);

    /**
     * Populates the layout with random images from `chessboardImages`.
     * 
     * This function takes the predefined `layoutTemplate` and fills the "image" type slots with 
     * random images from the `chessboardImages` array. The images are selected randomly, and their 
     * `src` and `link` properties are assigned to the corresponding slots in the layout.
     * 
     * @function populateLayout
     * @returns {Array[]} - a new array representing the layout
     */
    function populateLayout() {
        const images = chessboardImages.sort(() => 0.5 - Math.random());

        let imageIndex = 0;
        return layoutTemplate.map(row =>
            row.map(item => {
                if (item.type === 'image') {
                    const img = images[imageIndex++];
                    return { ...item, src: img.src, link: img.link };
                }
                return item;
            })
        );
    }

    /**
     * @hook useEffect
     * @description 
     * Runs once when the component mounts. It uses the `populateLayout` function to fill the layout with random 
     * images and then updates the state with the populated layout.
     * 
     * The layout is populated using the `layoutTemplate` and `chessboardImages` (external data) passed to `populateLayout`.
     * 
     * This hook does not depend on any state or props (hence the empty dependency array), meaning it runs only 
     * once when the component mounts and will not trigger on subsequent re-renders.
     */
    useEffect(() => {
        setLayout(populateLayout());
    }, []);

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
                                } transition-all duration-300 ease-in-out hover:opacity-95 hover:scale-[1.02]`}
                        >
                            {(() => {
                                switch (item.type) {
                                    case 'chart':
                                        return (
                                            <img
                                                src="#"
                                                alt="Chart placeholder"
                                                className="chessboard !min-h-[200px]"
                                            />
                                        );
                                    case 'box':
                                        return (
                                            <div className="chessboard relative !min-h-[200px]">
                                                <h1 className="text-base sm:text-xl md:text-2xl lg:text-4xl ml-4 mt-4">Project</h1>
                                                <div className="flex absolute gap-2 bottom-4 ml-4">
                                                    <button className="cursor-not-allowed btn-b rounded-full px-3 sm:px-5 text-sm sm:text-base">Tag 1</button>
                                                    <button className="cursor-not-allowed btn-b rounded-full px-3 sm:px-5 text-sm sm:text-base">Tag 2</button>
                                                    <button className="cursor-not-allowed btn-b rounded-full px-3 sm:px-5 text-sm sm:text-base">Tag 3</button>
                                                </div>
                                            </div>
                                        );
                                    default:
                                        return (
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
                                        );
                                }
                            })()}
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