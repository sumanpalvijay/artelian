"use client";

import Image from "next/image";
import Link from "next/link";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1.2fr",
          gap: "60px",
        }}
      >
        {/* LEFT */}
        <div>
          <Image src="/logo.png" alt="Logo" width={140} height={60} />

          <p style={{ marginTop: "18px", lineHeight: "1.8" }}>
            6-3-251/3, Ground Floor,<br />
            Abacus Towers, Banjara Hills<br />
            Road No 1, Hyderabad 500034
          </p>

          <div style={{ display: "flex", gap: "14px", marginTop: "18px" }}>
            <span>📷</span>
            <span>📘</span>
            <span>▶️</span>
          </div>
        </div>

        {/* CENTER */}
        <div style={{ textAlign: "center" }}>
          <p style={{ opacity: 0.7 }}>Associated with</p>

          <Image src="/arc.png" alt="ARC" width={120} height={60} />
          <Image
            src="/barcelona.png"
            alt="Barcelona Academy of Art"
            width={120}
            height={60}
          />

          <button
            style={{
              marginTop: "20px",
              padding: "10px 22px",
              background: "#222",
              border: "1px solid #333",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            SUPPORT US
          </button>
        </div>

        {/* RIGHT */}
        <div>
          <h4>Join our mailing list</h4>

          <input
            type="email"
            placeholder="Email *"
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid #666",
              padding: "8px 0",
              color: "#fff",
            }}
          />

          <label style={{ fontSize: "12px", marginTop: "12px", display: "block" }}>
            <input type="checkbox" /> I want to subscribe to your mailing list *
          </label>

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
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          marginTop: "40px",
          borderTop: "1px solid #222",
          paddingTop: "18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "13px",
          opacity: 0.7,
        }}
      >
        <p>© 2019 Samsara Academy of Art. All Rights Reserved</p>

        {/* SCROLL TO TOP */}
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
