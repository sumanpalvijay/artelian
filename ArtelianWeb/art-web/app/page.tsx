import Image from "next/image";
import CarouselImage from "./components/CarouselImage";

export default function HomePage() {
  return (
    <main>

      {/* HERO SECTION */}

      <section
        style={{
          position: "relative",
          height: "85vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* SLIDING IMAGES */}
        <CarouselImage />

        {/* DARK OVERLAY + CONTENT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            flexDirection: "column",
            zIndex: 2,
          }}
        >



        </div>
      </section>


      {/* OUR STORY */}
      <section
        style={{
          background: "#f1ede5",
          padding: "80px 15%",
          textAlign: "center",
        }}
      >
        <h2 style={{ letterSpacing: "2px" }}>OUR STORY</h2>
        <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
          Samsara Academy of Art is a space dedicated to nurturing artistic
          practice through structured learning and creative exploration.
        </p>
      </section>

      {/* WHY ACADEMY */}
      <section
        style={{
          background: "#f1ede5",
          padding: "80px 12%",
          display: "flex",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ letterSpacing: "2px" }}>
            WHY SAMSARA ACADEMY OF ART?
          </h2>

          <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
            Our programs focus on building a strong foundation in observation,
            technique, and personal expression.
          </p>

          <ul style={{ marginTop: "20px", lineHeight: "2" }}>
            <li>✔ International Faculty</li>
            <li>✔ Personal Growth</li>
            <li>✔ Skill & Creativity</li>
          </ul>
        </div>

        <div style={{ flex: 1 }}>
          <Image
            src="/why.jpg"
            alt="Why Academy"
            width={400}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "80px 20%",
          textAlign: "center",
        }}
      >
        <Image
          src="/student.jpg"
          alt="Student"
          width={120}
          height={120}
          style={{ borderRadius: "50%" }}
        />

        <p style={{ marginTop: "20px", fontStyle: "italic", lineHeight: "1.8" }}>
          “The academy transformed the way I see and express art. The guidance
          helped me discover my own voice.”
        </p>

        <p style={{ marginTop: "15px", opacity: 0.7 }}>
          — Student, Drawing Program
        </p>
      </section>

    </main>
  );
}
