"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const slides = [
    {
      image: "/hero1.jpg",
      title: "DISCOVER OUR",
      subtitle: "STUDENT WORKS",
    },
    {
      image: "/hero2.jpg",
      title: "LEARN",
      subtitle: "CLASSICAL ART",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <main className="pt-16">

      {/* HERO SLIDER */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <Image
          src={slides[current].image}
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">

          <h1 className="text-3xl md:text-5xl tracking-widest">
            {slides[current].title}
          </h1>

          <h2 className="mt-3 text-3xl md:text-5xl tracking-widest">
            {slides[current].subtitle}
          </h2>

          <button className="mt-8 bg-[#b04a3f] px-8 py-3 tracking-widest text-sm hover:bg-[#8c3a32] transition">
            GALLERY
          </button>

        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronRight size={40} />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? "bg-white" : "bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* Social Icons */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">

          <a className="bg-blue-600 p-2 rounded">
            <img src="/facebook.svg" className="w-5" />
          </a>

          <a className="bg-red-600 p-2 rounded">
            <img src="/youtube.svg" className="w-5" />
          </a>

          <a className="bg-pink-500 p-2 rounded">
            <img src="/instagram.svg" className="w-5" />
          </a>

        </div>

      </section>
      <section className="bg-[#e8e0d6] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">

          {/* Title */}
          <div className="flex items-center gap-6 md:w-1/3">
            <h2 className="text-3xl text-[#8b3a32] font-light">
              Our Story
            </h2>

            <div className="h-16 w-[2px] bg-[#8b3a32]"></div>
          </div>

          {/* Text */}
          <p className="text-gray-700 leading-relaxed md:w-2/3">
            Samsara Academy of Art was founded in 2019, offering art courses dedicated
            to providing in-depth art training inspired by Renaissance, centuries of
            studio practice combined with contemporary ideas. The aim is to encourage
            an individual to develop a unique style upon the same underlying
            foundation, whether in Fine Arts or Entertainment Arts (Movies and Games).
          </p>

        </div>
      </section>

      <section className="relative w-full h-[500px]">
        <Image
          src="/quote-art.jpg"
          alt="Art Quote"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <p className="text-white italic text-lg md:text-2xl max-w-4xl leading-relaxed">
            "Academic Art is not an end per se, but a learning stage for the artists,
            where they strengthen their knowledge, skills, and techniques necessary
            to experiment and innovate. Use the grammar to find your own voice."
          </p>
        </div>
      </section>

    </main>
  );
}