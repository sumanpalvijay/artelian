"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(#1a1a1a, #000)",
        color: "#fff",
        padding: "60px 8% 30px",
        fontSize: "14px",
      }}
    >
      {/* TOP SECTION */}
      <div className="footer-grid">

        {/* LEFT */}
        <div>
          <Image src="/logo.jpg" alt="Logo" width={160} height={70} />

          <p style={{ marginTop: "18px", lineHeight: "1.8" }}>
            3/146,2nd Floor,Sector H,<br />
            LDA colony, Power House<br />
            Chauraha, Lucknow-226012<br />
            Uttar Pradesh, India<br />
            Phone: +91 9120020101<br />
            Email: artliaartinstitude@gmail.com
          </p>

          <div style={{ display: "flex", gap: "14px", marginTop: "18px" }}>
            <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            <Image src="/insta.svg" alt="Instagram" width={24} height={24} />
            <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
          </div>
        </div>

        {/* CENTER */}
        <div className="center-footer">
          <p style={{ opacity: 0.7 }}>Associated with</p>

          <div style={{ marginTop: "20px" }}>
            <Image src="/arcs.avif" alt="ARC" width={140} height={70} />
          </div>

          <div style={{ marginTop: "10px" }}>
            <Image
              src="/second.avif"
              alt="Barcelona Academy of Art"
              width={140}
              height={70}
            />
          </div>

          <button
            style={{
              marginTop: "20px",
              padding: "10px 22px",
              cursor: "pointer",
              background: "#222",
              border: "1px solid #444",
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            SUPPORT US
          </button>
        </div>

        {/* RIGHT */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Join our mailing list</h4>

          <input
            type="email"
            placeholder="Email *"
            style={{
              width: "100%",
              background: "transparent",
              borderBottom: "1px solid #666",
              padding: "8px 0",
              color: "#fff",
            }}
          />

          <button
            style={{
              marginTop: "16px",
              padding: "10px 26px",
              border: "1px solid #fff",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>

          <label
            style={{
              fontSize: "12px",
              marginTop: "12px",
              display: "block",
            }}
          >
            <input type="checkbox" /> I want to subscribe to your mailing list *
          </label>
        </div>

      </div>

      {/* BOTTOM */}
      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #333",
          paddingTop: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0 }}>
          ©2026 Artelian Institute of Art. All Rights Reserved
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#222",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ↑
        </button>
      </div>
    </footer>
  );
}