"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
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
          priority
        />
      </div>

      {/* NAV BELOW LOGO */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem", position: "relative" }}>
        <nav style={{ display: "flex", gap: "3rem" }}>

          <Link
            href="/home"
            style={{
              color: pathname === "/home" ? "#c74848" : "#fff",
              letterSpacing: "2px",
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
              letterSpacing: "2px",
            }}
          >
            GALLERY
          </Link>
        </nav>

        <Link
          href="/contact"
          style={{
            color: pathname === "/contact" ? "#c74848" : "#fff",
            letterSpacing: "2px",
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
            letterSpacing: "2px",
          }}
        >
          COMMUNITY
        </Link>

        {/* LOGIN */}
        <Link
          href="/login"
          style={{
            position: "absolute", right: 0, top: 0, color: "#c74848", textDecoration: "none",
            display: "flex", alignItems: "center"
          }}
        >
          <Image
            src="/login.png"
            alt="Login Icon"
            width={20}
            height={20}
            style={{ marginRight: "5px" }}
          />
          Log In
        </Link>
      </div>
    </header >
  );
}

/* ================= DROPDOWN COMPONENTS ================= */

function Dropdown({ title, active, open, setOpen, children, width = "220px" }) {
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
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
