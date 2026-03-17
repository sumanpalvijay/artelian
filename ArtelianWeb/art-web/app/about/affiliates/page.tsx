"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
export default function AffiliatesPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };
    return (
        <div className="font-serif">


            {/* HERO SECTION */}
            <section className="relative h-[70vh] w-full">

                {/* Background Image */}
                <Image
                    src="/gallery/color.jpeg"
                    alt="Methodology"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Center Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl tracking-widest font-light">
                        AFFILIATES
                    </h1>
                </div>

                {/* Social Icons Right Side */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-white text-xl">
                    <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                    <FaYoutube className="hover:text-red-500 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                </div>

            </section>

            {/* SUB NAV SECTION */}
            <section className="bg-[#e8dfd2] py-5">
                <div className="max-w-4xl mx-auto flex items-center justify-center gap-6 text-sm md:text-base tracking-wide">

                    {/* Down Arrow */}
                    <span className="text-xl">⌄</span>

                    {/* Divider + Links */}
                    <div className="flex items-center gap-6">
                        <button className="hover:text-[#b04a3f] transition">
                            The Atelier System


                        </button>

                        <span className="text-gray-500">|</span>

                        <button className="hover:text-[#b04a3f] transition">
                            Various Methods
                        </button>
                    </div>

                </div>
            </section>

            {/* ====== AFFILIATES SECTION ====== */}
            <section className="bg-[#d8cfc2] px-6 sm:px-16 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                    {/* LEFT TEXT */}
                    <div>
                        <h2 className="text-3xl text-[#8a4b32] mb-6">Affiliates</h2>

                        <p className="text-[18px] leading-loose text-gray-800">
                            The affiliates of Artelia Institute of Arts are a network of
                            institutions and professionals who share our commitment to
                            excellence in art education and practice.
                        </p>
                    </div>

                    {/* RIGHT VIDEO BOX */}
                    <div className="bg-black h-[320px] relative shadow-2xl">
                        <Image
                            src="/gallery/sitting.jpeg"
                            alt="Affiliates Image"
                            fill
                            className="object-cover opacity-90"
                        />
                    </div>


                </div>
            </section>

            {/* ====== OUR STORY SECTION ====== */}
            <section className="bg-[#111111] text-white px-6 sm:px-16 py-24">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl text-center mb-16">Historical Context</h2>

                    <div className="grid md:grid-cols-2 gap-12 text-[17px] leading-loose text-gray-300">

                        <p>
                            Artelia Institute of Arts was founded with the intention of
                            creating a unique platform in India that provides rigorous,
                            in-depth art training and knowledge inspired by classical and
                            contemporary practices.
                        </p>

                        <p>
                            The academy was built as a place of selfless education where
                            only the progress of the student matters. Professional teachers
                            who share strong artistic beliefs guide every learner with
                            discipline and creative integrity.
                        </p>

                    </div>

                </div>
            </section>
            {/* ====== WHOS IT FOR? SECTION ====== */}


            <section className="bg-[#e8e0d6] py-16 px-6 relative">
                <h2 className="text-center text-3xl font-light text-[#8b3a32] mb-10">
                    Affiliates
                </h2>

                {/* LEFT ARROW */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow"
                >
                    ◀
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow"
                >
                    ▶
                </button>

                {/* SCROLL CONTAINER */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-10"
                >
                    {[
                        "/gallery/house.jpeg",
                        "/gallery/model.jpeg",
                        "/gallery/flower.jpeg",
                        "/gallery/face.jpeg",
                        "/gallery/female.jpeg",
                        "/gallery/nature.jpeg",
                    ].map((img, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(img)}
                            className="min-w-[250px] h-[300px] relative rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
                        >
                            <Image
                                src={img}
                                alt="affiliate"
                                fill
                                className="object-cover transition duration-300 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                        </div>
                    ))}
                </div>
                {/* 🔥 IMAGE MODAL */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative w-[90%] max-w-3xl h-[80vh]">

                            <Image
                                src={selectedImage}
                                alt="preview"
                                fill
                                className="object-contain rounded-lg"
                            />

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-white text-2xl"
                            >
                                ✕
                            </button>

                        </div>
                    </div>
                )}
            </section>


        </div>
    );
}