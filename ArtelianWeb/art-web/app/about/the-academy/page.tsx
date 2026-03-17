"use client";

import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
export default function AboutPage() {
    return (
        <div className="font-serif">


            {/* HERO SECTION */}
            <section className="relative h-[70vh] w-full">

                {/* Background Image */}
                <Image
                    src="/gallery/nature.jpeg"
                    alt="About Us"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Center Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl tracking-widest font-light">
                        ABOUT US
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
                            Our Story
                        </button>

                        <span className="text-gray-500">|</span>

                        <button className="hover:text-[#b04a3f] transition">
                            Who’s it for?
                        </button>
                    </div>

                </div>
            </section>

            {/* ====== MISSION SECTION ====== */}
            <section className="bg-[#d8cfc2] px-6 sm:px-16 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                    {/* LEFT TEXT */}
                    <div>
                        <h2 className="text-3xl text-[#8a4b32] mb-6">Mission</h2>

                        <p className="text-[18px] leading-loose text-gray-800">
                            The mission of Artelia Institute of Arts is to provide the
                            highest level of education in technical and philosophical
                            practices in drawing and painting for students who wish to
                            pursue a professional career in the fields of fine art and
                            entertainment art.
                        </p>
                    </div>

                    {/* RIGHT VIDEO BOX */}
                    <div className="bg-black h-[320px] relative shadow-2xl">
                        <Image
                            src="/gallery/flower.jpeg"
                            alt="Academy Video"
                            fill
                            className="object-cover opacity-90"
                        />
                    </div>

                </div>
            </section>

            {/* ====== OUR STORY SECTION ====== */}
            <section className="bg-[#111111] text-white px-6 sm:px-16 py-24">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl text-center mb-16">Our Story</h2>

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
            <section className="bg-[#d8cfc2] px-6 sm:px-16 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                    {/* LEFT TEXT */}
                    <div>
                        <h2 className="text-3xl text-[#8a4b32] mb-6">Who's it for?</h2>

                        <p className="text-[18px] leading-loose text-gray-800">
                            The mission of Artelia Institute of Arts is to provide the
                            highest level of education in technical and philosophical
                            practices in drawing and painting for students who wish to
                            pursue a professional career in the fields of fine art and
                            entertainment art.
                        </p>
                    </div>

                    {/* RIGHT VIDEO BOX */}
                    <div className="bg-black h-[320px] relative shadow-2xl">
                        <Image
                            src="/gallery/house.jpeg"
                            alt="Academy Image"
                            fill
                            className="object-cover opacity-90"
                        />
                    </div>

                </div>
            </section>


        </div>
    );
}