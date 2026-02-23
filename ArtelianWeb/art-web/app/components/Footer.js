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
      <div className="footer-grid">

        {/* LEFT */}
        <div>
          <Image src="/logo.jpg" alt="Logo" width={140} height={60} />

          <p style={{ marginTop: "18px", lineHeight: "1.8" }}>
            6-3-251/3, Ground Floor,<br />
            Abacus Towers, Banjara Hills<br />
            Road No 1, Hyderabad 500034
          </p>

          <div style={{ display: "flex", gap: "14px", marginTop: "18px" }}>
            <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            <Image src="/insta.svg" alt="Instagram" width={24} height={24} />
            <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
          </div>
        </div>

        {/* CENTER */}
        <div>
          <p style={{ opacity: 0.7 }}>Associated with</p>

          <div className="pb-10 pt-7">
            <Image src="/arcs.avif" alt="sss" width={120} height={60} />
          </div>

          <div className="pb-4">
            <Image
              src="/second.avif"
              alt="Barcelona Academy of Art"
              width={120}
              height={60}
            />
          </div>

          <button
            className="bg-white text-black rounded-[5px] font-medium hover:bg-[#7a461e] hover:text-white"
            style={{
              marginTop: "20px",
              padding: "10px 22px",
              cursor: "pointer",
            }}
          >
            SUPPORT US
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex gap-10 footer-right">
          <div>
            <h4>Join our mailing list</h4>

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

          <div>
            <button
              className="bg-white text-black rounded-[5px] font-medium hover:bg-[#7a461e] hover:text-white"
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

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p className="text-[12px] font-bold">
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