"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const slides = [
    {
      image: "/gallery/house.jpeg",
      title: "DISCOVER OUR",
      subtitle: "STUDENT WORKS",
    },
    {
      image: "/gallery/model.jpeg", // ✅ FIXED
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
          alt="slider"
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

        {/* Dots */}
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
        <div className="absolute right-6 top-6 flex flex-col gap-4">
          <Image src="/facebook.svg" alt="facebook" width={20} height={20} />
          <Image src="/youtube.svg" alt="youtube" width={20} height={20} />
          <Image src="/instagram.svg" alt="instagram" width={20} height={20} />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#e8e0d6] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
          <div className="flex items-center gap-6 md:w-1/3">
            <h2 className="text-3xl text-[#8b3a32] font-light">
              Our Story
            </h2>
            <div className="h-16 w-[2px] bg-[#8b3a32]"></div>
          </div>

          <p className="text-gray-700 leading-relaxed md:w-2/3">
            Samsara Academy of Art was founded in 2019, offering art courses dedicated
            to providing in-depth art training inspired by Renaissance, centuries of
            studio practice combined with contemporary ideas.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/gallery/pumkin.jpeg"
          alt="Art Quote"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <p className="text-white italic text-lg md:text-2xl max-w-4xl">
            "Academic Art is not an end per se, but a learning stage..."
          </p>
        </div>
      </section>
    </main>
  );
}