import { useState } from "react";
import { useTranslation } from "react-i18next";
// import Link from "next/link";

/**
 * @constant {string[]} chessboardImages
 * @description Array of image paths for the chessboard
 */
const chessboardImages = [
    "chessboard/bitpolito-post-sindaco-lugano.jpg",
    "chessboard/bitpolito-post-mastering-lightning.jpg",
    "#",
    "chessboard/bitpolito-post-capire-bitcoin.jpg",
    "chessboard/bitpolito-opensource-post-discovering-bitcoin.jpg",
    "chessboard/bitpolito-opensource-post-custodire-bitcoin.jpg",
    "#",
    "chessboard/bitpolito-post-pizza-day-gridless.jpg",
    "#",
    "chessboard/bitpolito-opensource-post-bitcoin-everyday.jpg",
    "chessboard/bitpolito-post-zbd.jpg",
    "#",
    "chessboard/bitpolito-post-todd.jpg",
    "chessboard/bitpolito-post-corso-bitcoin.jpg",
    "chessboard/bitpolito-opensource-post-teoria-dei-giochi.jpg",
    "#",
    "chessboard/bitpolito-opensource-post-scaling-bitcoin.jpg"
];

/**
 * @constant {string[]} imageLinks
 * @description URLs that each chessboard image links to when clicked
 */
const imageLinks = [
    "https://www.instagram.com/p/Csd0MmFtisC/",
    "https://www.amazon.it/Mastering-Lightning-Network-Protocollo-Istantanei-ebook/dp/B0BSRB3BG1/ref=sr_1_1?crid=FG4OGKEIRC4T&dib=eyJ2IjoiMSJ9.9g0Ezn3vK9ozcoRV-A12Zj0laHh7zZnez9WdEeHr6XzIfTlCRRzb9IHhIP0m2kRwJgnw-rLIjP0qwJ6ScK6AW66JLnoqzWXOUCLY7qBAuGqUtfp6q9HQwDHLn__z8ubyexAwYSVwU9ocn9ETqRKIleYmTFTFE2FQUmMfwnxthi-p-Nww7K19OOmVHs0u69vN.QGE7-HwChTv4lYX88ff5kU_lMtZZMHjIAxGaiKIXn-k&dib_tag=se&keywords=mastering+lightning+network&nsdOptOutParam=true&qid=1736418758&sprefix=mastering+light%2Caps%2C397&sr=8-1",
    "#",
    "https://www.instagram.com/p/Cl_rlqHtqFW/",
    "https://www.instagram.com/p/C7j74w0NrN5/",
    "https://www.instagram.com/p/C6O1cmPtbxe/",
    "#",
    "https://www.instagram.com/p/C6tzVJ3tc3F/?img_index=1",
    "#",
    "https://www.instagram.com/p/C4-tmUMN3Ow/",
    "https://www.instagram.com/p/DBwk6grNy9D/",
    "#",
    "https://www.instagram.com/p/DBGg-EqojVE/",
    "#",
    "https://www.instagram.com/p/C2-fr-btZ1D/",
    "#",
    "https://www.instagram.com/p/DCpKJ0-oJuk/"
];

/**
 * @constant {Array[]} layout
 * @description Array representing the layout of the chessboard. Each row contains an array of objects defining
 * the type of content, the span, the image source and the link associated with the image
 */
const layout = [
    [
        { type: 'image', span: 1, src: chessboardImages[1], link: imageLinks[1] },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[0], link: imageLinks[0] }
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
                            className={`${
                                item.span === 2 
                                    ? 'col-span-1 sm:col-span-2' 
                                    : 'col-span-1'
                            } aspect-square sm:aspect-[4/3] transition-transform hover:scale-[1.02]`}
                        >
                            {item.type === 'chart' ? (
                                <img 
                                    src="#" 
                                    alt="Chart placeholder"
                                    className="chessboard w-full h-full object-cover rounded-lg shadow-sm"
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
                                        className="chessboard w-full h-full object-cover rounded-lg shadow-sm transition-all hover:shadow-md"
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
            </div>
        </div>
    );
}