import Image from "next/image";
import CarouselImage from "./components/CarouselImage";

export default function HomePage() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden">

        {/* Sliding Images */}
        <CarouselImage />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white px-5">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
            Welcome to Samsara Academy of Art
          </h1>
        </div>
      </section>


      {/* OUR STORY */}
      <section className="bg-[#f1ede5] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="tracking-widest text-2xl md:text-3xl font-semibold">
            OUR STORY
          </h2>

          <p className="mt-5 leading-relaxed text-gray-700">
            Samsara Academy of Art is a space dedicated to nurturing artistic
            practice through structured learning and creative exploration.
          </p>
        </div>
      </section>


      {/* WHY ACADEMY */}
      <section className="bg-[#f1ede5] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Left Content */}
          <div className="flex-1">
            <h2 className="tracking-widest text-2xl md:text-3xl font-semibold">
              WHY SAMSARA ACADEMY OF ART?
            </h2>

            <p className="mt-5 leading-relaxed text-gray-700">
              Our programs focus on building a strong foundation in observation,
              technique, and personal expression.
            </p>

            <ul className="mt-5 space-y-3 text-gray-800">
              <li>✔ International Faculty</li>
              <li>✔ Personal Growth</li>
              <li>✔ Skill & Creativity</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <Image
              src="/why.jpg"
              alt="Why Academy"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>


      {/* TESTIMONIAL */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <Image
            src="/student.jpg"
            alt="Student"
            width={120}
            height={120}
            className="rounded-full mx-auto object-cover"
          />

          <p className="mt-6 italic leading-relaxed text-gray-300">
            “The academy transformed the way I see and express art. The guidance
            helped me discover my own voice.”
          </p>

          <p className="mt-4 text-gray-400">
            — Student, Drawing Program
          </p>
        </div>
      </section>

    </main>
  );
}