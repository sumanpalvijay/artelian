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
  const [openMore, setOpenMore] = useState(false);

  return (
    <header
      style={{
        background: "#111",
        padding: "1rem 3rem",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logo.png"
          alt="Samsara Academy of Art"
          width={140}
          height={60}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* NAVIGATION */}
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* HOME */}
        <Link
          href="/"
          style={{
            color: pathname === "/" ? "#c74848" : "#fff",
            letterSpacing: "2px",
          }}
        >
          HOME
        </Link>

        {/* ABOUT */}
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

        {/* COURSES */}
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

        {/* ADMISSIONS */}
        <Dropdown
          title="ADMISSIONS"
          active={pathname.startsWith("/admissions")}
          open={openAdmissions}
          setOpen={setOpenAdmissions}
          width="240px"
        >
          <DropdownItem href="/admissions/process" label="ADMISSIONS PROCESS" />
          <DropdownItem
            href="/admissions/application-form"
            label="APPLICATION FORM"
          />
        </Dropdown>

        {/* MORE */}
        <Dropdown
          title="MORE"
          active={pathname.startsWith("/more")}
          open={openMore}
          setOpen={setOpenMore}
          width="260px"
        >
          <DropdownItem href="/more/contact" label="CONTACT" />
          <DropdownItem href="/more/exhibitions" label="EXHIBITIONS" />
          <DropdownItem
            href="/more/light-shadow-truth-2025"
            label="LIGHT SHADOW TRUTH 2025"
          />
          <DropdownItem href="/more/prelude-2023" label="PRELUDE 2023" />
        </Dropdown>

        {/* GALLERY */}
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

      {/* LOGIN */}
      <Link
        href="/login"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#c74848",
          fontSize: "16px",
        }}
      >
        <span style={{ fontSize: "20px", marginRight: "6px" }}>👤</span>
        Log In
      </Link>
    </header>
  );
}

/* ---------- Reusable Components ---------- */

function Dropdown({ title, active, open, setOpen, children, width = "200px" }) {
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => {
        clearTimeout(window[`${title}Timeout`]);
        setOpen(true);
      }}
      onMouseLeave={() => {
        window[`${title}Timeout`] = setTimeout(() => {
          setOpen(false);
        }, 200);
      }}
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
            top: "2.5rem",
            left: 0,
            background: "#111",
            width,
            padding: "10px 0",
            border: "1px solid #222",
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
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
