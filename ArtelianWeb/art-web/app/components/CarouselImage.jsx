"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
    {
        image: "/hero1.jpg",
        title: "DRAWING AND\nPAINTING PROGRAMME",
        subtitle: "Approved by Art Renewal Center (USA)",
    },
    {
        image: "/hero2.jpg",
        title: "CLASSICAL ART\nFOUNDATION",
        subtitle: "Traditional techniques, modern approach",
    },
    {
        image: "/hero3.jpg",
        title: "MASTER\nOBSERVATION",
        subtitle: "From seeing to expressing",
    },
];

export default function CarouselImage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    const nextSlide = () =>
        setCurrent((prev) => (prev + 1) % slides.length);

    return (
        <div style={{ position: "relative", height: "85vh", overflow: "hidden" }}>
            {/* SLIDES */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute",
                        inset: 0,
                        opacity: current === index ? 1 : 0,
                        transition: "opacity 1.5s ease-in-out",
                    }}
                >
                    <Image
                        src={slide.image}
                        alt="Hero Slide"
                        fill
                        priority={index === 0}
                        style={{ objectFit: "cover" }}
                    />

                    {/* DARK OVERLAY */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(0,0,0,0.45)",
                        }}
                    />
                </div>
            ))}

            {/* CONTENT */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textAlign: "center",
                    zIndex: 2,
                }}
            >
                <h1
                    style={{
                        fontSize: "38px",
                        letterSpacing: "3px",
                        whiteSpace: "pre-line",
                    }}
                >
                    {slides[current].title}
                </h1>

                <p style={{ marginTop: "12px", opacity: 0.85 }}>
                    {slides[current].subtitle}
                </p>

                <button
                    style={{
                        marginTop: "22px",
                        padding: "12px 30px",
                        background: "#c74848",
                        border: "none",
                        color: "#fff",
                        letterSpacing: "1px",
                        cursor: "pointer",
                    }}
                >
                    LEARN MORE
                </button>
            </div>

            {/* ARROWS */}
            <button onClick={prevSlide} style={arrowStyle("left")}>‹</button>
            <button onClick={nextSlide} style={arrowStyle("right")}>›</button>

            {/* DOTS */}
            <div
                style={{
                    position: "absolute",
                    bottom: "30px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    zIndex: 2,
                }}
            >
                {slides.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: current === i ? "#fff" : "rgba(255,255,255,0.4)",
                            cursor: "pointer",
                        }}
                    />
                ))}
            </div>

            {/* SOCIAL ICONS */}
            <div
                style={{
                    position: "absolute",
                    right: "20px",
                    bottom: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    zIndex: 2,
                    fontSize: "18px",
                }}
            >
                <span style={{ cursor: "pointer" }}>📘</span>
                <span style={{ cursor: "pointer" }}>▶️</span>
                <span style={{ cursor: "pointer" }}>📸</span>
            </div>
        </div>
    );
}

function arrowStyle(side) {
    return {
        position: "absolute",
        top: "50%",
        [side]: "20px",
        transform: "translateY(-50%)",
        fontSize: "36px",
        color: "#fff",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 2,
    };
}
