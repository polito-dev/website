"use client";

import { useState, useEffect, useRef } from "react";
import { carouselImages } from "./components/Carousel";
import { chessboardImages } from "./components/Chessboard";

export default function functions() {
    // page.js
    const [isBottom, setIsBottom] = useState(false);
    const [footerHeight, setFooterHeight] = useState(0);
    const footerRef = useRef(null);
    const contentRef = useRef(null);

    // Carousel.js
    const [currentImage, setCurrentImage] = useState(0);
    const [progress, setProgress] = useState(0);
    const [fade, setFade] = useState(true);

    // Chessboard.js
    const [visibleImages, setVisibleImages] = useState(6); // numebr of images to show

    // page.js
    const scrollToTop = () => {
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, -window.scrollY / (500 / 15));
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    const handleScroll = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        setIsBottom(isAtBottom);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (footerRef.current) {
            setFooterHeight(footerRef.current.offsetHeight);
        }
    }, [isBottom]);

    useEffect(() => {
        if (contentRef.current) {
            const lastChild = contentRef.current.lastElementChild;
            if (lastChild) {
                lastChild.style.marginBottom = `${footerHeight + 80}px`;
            }
        }
    }, [footerHeight]);

    useEffect(() => {
        const handleResize = () => {
            if (footerRef.current) {
                setFooterHeight(footerRef.current.offsetHeight);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Carousel.js
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % carouselImages.length);
                setProgress(0);
                setFade(true);
            }, 500);
        }, 15000);

        const progressInterval = setInterval(() => {
            setProgress((prev) => (prev + 1) % 100);
        }, 150);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, []);

    // Chessboard.js
    const loadMoreImages = () => {
        setVisibleImages((prev) => Math.min(prev + 2, chessboardImages.length));
    };

    return {
        isBottom, footerHeight, footerRef, contentRef, scrollToTop, // page.js
        currentImage, progress, fade, // Carousel.js
        visibleImages, loadMoreImages // Chessboard.js
    };
};