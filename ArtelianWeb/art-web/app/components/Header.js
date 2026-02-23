"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [openAbout, setOpenAbout] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [openAdmissions, setOpenAdmissions] = useState(false);
  const [openExhibition, setOpenExhibition] = useState(false);

  return (
    <header style={{ background: "#111", padding: "1.5rem 3rem" }}>

      {/* LOGO */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "-2.5rem", marginBottom: "-0.5rem" }}>
        <Image
          src="/Artelia-removebg.png"
          alt="Artelia Logo"
          width={180}
          height={80}
          style={{ maxWidth: "100%", height: "auto" }}
          priority
        />
      </div>

      {/* NAV BELOW LOGO */}
      <div
        style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: "clamp(1rem, 3vw, 3rem)",
          flexWrap: "wrap", // 🔥 IMPORTANT
          position: "relative",
        }}
      >
        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "1.8rem",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        <nav className="desktop-nav" style={{ display: "flex", gap: "3rem" }}>
          <Link
            href="/home"
            style={{
              color: pathname === "/home" ? "#c74848" : "#fff", marginLeft: "10rem",
              letterSpacing: "0.15em",
              fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
            }}
          >
            HOME
          </Link>

          <Dropdown
            title="ABOUT"
            active={pathname.startsWith("/about")}
            open={openAbout}
            setOpen={setOpenAbout}
          >
            <DropdownItem href="/about/the-academy" label="THE ACADEMY" />
            <DropdownItem href="/about/methodology" label="METHODOLOGY" />
            <DropdownItem href="/about/affiliates" label="AFFILIATES" />
            <DropdownItem href="/about/faculty-staff" label="FACULTY & STAFF" />
          </Dropdown>

          <Dropdown
            title="COURSES"
            active={pathname.startsWith("/courses")}
            open={openCourses}
            setOpen={setOpenCourses}
          >
            <DropdownItem href="/courses/full-time" label="FULL TIME STUDY" />
            <DropdownItem href="/courses/part-time" label="PART TIME STUDY" />
            <DropdownItem href="/courses/workshops" label="WORKSHOPS" />
          </Dropdown>

          <Dropdown
            title="ADMISSIONS"
            active={pathname.startsWith("/admissions")}
            open={openAdmissions}
            setOpen={setOpenAdmissions}
          >
            <DropdownItem href="/admissions/apply" label="HOW TO APPLY" />
            <DropdownItem href="/admissions/fees" label="FEES" />
          </Dropdown>

          <Link
            href="/gallery"
            style={{
              color: pathname === "/gallery" ? "#c74848" : "#fff",
              letterSpacing: "0.15em",
              fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
            }}
          >
            GALLERY
          </Link>
        </nav>

        <Link
          href="/contact"
          style={{
            color: pathname === "/contact" ? "#c74848" : "#fff",
            letterSpacing: "0.15em",
            fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
          }}
        >
          CONTACT
        </Link>

        <Dropdown
          title="EXHIBITIONS"
          active={pathname.startsWith("/exhibitions")}
          open={openExhibition}
          setOpen={setOpenExhibition}
        >
          <DropdownItem href="/exhibitions/upcoming" label="UPCOMING EXHIBITIONS" />
          <DropdownItem href="/exhibitions/past" label="PAST EXHIBITIONS" />

        </Dropdown>

        <Link
          href="/Community"
          style={{
            color: pathname === "/Community" ? "#c74848" : "#fff",
            letterSpacing: "0.15em",
            fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
          }}
        >
          COMMUNITY
        </Link>

        {/* LOGIN */}
        <Link
          href="/login"
          style={{
            position: "relative", marginLeft: "auto", marginTop: "0.5rem", color: "#c74848", textDecoration: "none",
            display: "flex", alignItems: "center"
          }}
        >
          <Image
            src="/login.png"
            icon color="white"
            alt="Login Icon"
            width={20}
            height={20}
            style={{ marginRight: "5px", filter: "invert(100%) sepia(100%) grayscale(100%)" }}
          />
          Log In
        </Link>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div
            className="mobile-nav"
            style={{
              width: "100%",
              background: "#111",
              padding: "1rem 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Link href="/home" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
            <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>COURSES</Link>
            <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>ADMISSIONS</Link>
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>GALLERY</Link>
            <Link href="/exhibitions" onClick={() => setMobileMenuOpen(false)}>EXHIBITIONS</Link>
            <Link href="/community" onClick={() => setMobileMenuOpen(false)}>COMMUNITY</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
          </div>
        )}

      </div>
    </header>
  );
}

/* ================= DROPDOWN COMPONENTS ================= */

function Dropdown({ title, active, open, setOpen, children, width = "220px" }) {
  const timeoutRef = useRef(null);

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300); // short delay helps cursor travel
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <span
        style={{
          color: active ? "#c74848" : "#fff",
          letterSpacing: "2px",
          cursor: "pointer",
        }}
      >
        {title}
      </span>

      {open && (
        <ul
          style={{
            position: "absolute",
            top: "2.3rem",
            left: 0,
            width,
            background: "#111",
            border: "1px solid #222",
            padding: "10px 0",
            zIndex: 50,
          }}
        >
          {children}
        </ul>
      )}
    </div>
  );
}

function DropdownItem({ href, label }) {
  return (
    <li style={{ padding: "12px 20px" }}>
      <Link href={href} style={{ color: "#fff", textDecoration: "none" }}>
        {label}
      </Link>
    </li>
  );
}
