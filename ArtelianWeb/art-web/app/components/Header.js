"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [openAdmissions, setOpenAdmissions] = useState(false);
  const [openExhibition, setOpenExhibition] = useState(false);

  return (
    <header className="w-full bg-[#111] text-white relative">

      {/* LOGO */}
{/* LOGO + HAMBURGER ROW */}
<div className="flex items-center justify-between w-full px-4 py-3 relative">

  {/* Logo */}
  <Image
    src="/Artelia-removebg.png"
    alt="Artelia Logo"
    width={140}
    height={60}
    priority
    className="md:mx-auto"
  />

  {/* Hamburger (Mobile Only) */}
  <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
  >
    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}></span>
    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
  </button>

  {/* Desktop Login */}
  <Link
    href="/login"
    className="hidden md:flex absolute right-10 items-center gap-3 text-[#c74848]"
  >
    <Image
      src="/login.png"
      alt="Login"
      width={30}
      height={30}
      className="invert"
    />
    Log In
  </Link>

</div>
      {/* MAIN NAVIGATION */}
      <div className="flex items-center justify-center relative px-10 pb-10 ">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-widest">

          <NavLink href="/home" pathname={pathname}>HOME</NavLink>

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

          <NavLink href="/gallery" pathname={pathname}>GALLERY</NavLink>

          <Dropdown
            title="EXHIBITIONS"
            active={pathname.startsWith("/exhibitions")}
            open={openExhibition}
            setOpen={setOpenExhibition}
          >
            <DropdownItem href="/exhibitions/upcoming" label="UPCOMING" />
            <DropdownItem href="/exhibitions/past" label="PAST" />
          </Dropdown>

          <NavLink href="/community" pathname={pathname}>COMMUNITY</NavLink>

          <NavLink href="/contact" pathname={pathname}>CONTACT</NavLink>

          {/* LOGIN */}


        </nav>

        {/* Mobile Menu Button */}
    {/* <button
  onClick={() => setMobileOpen(!mobileOpen)}
  className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
>
  <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
  <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}></span>
  <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
</button> */}
      </div>

      {/* Mobile Menu */}
<div className={`md:hidden bg-[#111] flex flex-col items-center gap-6 text-sm tracking-widest transition-all duration-300 overflow-hidden ${
  mobileOpen ? "max-h-[500px] py-6" : "max-h-0"
}`}>
    {/* Login */}
    <Link
      href="/login"
      onClick={() => setMobileOpen(false)}
      className="flex items-center gap-2 text-[#c74848]"
    >
      <Image
        src="/login.png"
        alt="Login"
        width={22}
        height={22}
        className="invert"
      />
      Log In
    </Link>

    <MobileLink href="/home" setMobileOpen={setMobileOpen}>HOME</MobileLink>
    <MobileLink href="/about" setMobileOpen={setMobileOpen}>ABOUT</MobileLink>
    <MobileLink href="/courses" setMobileOpen={setMobileOpen}>COURSES</MobileLink>
    <MobileLink href="/admissions" setMobileOpen={setMobileOpen}>ADMISSIONS</MobileLink>
    <MobileLink href="/gallery" setMobileOpen={setMobileOpen}>GALLERY</MobileLink>
    <MobileLink href="/exhibitions" setMobileOpen={setMobileOpen}>EXHIBITIONS</MobileLink>
    <MobileLink href="/community" setMobileOpen={setMobileOpen}>COMMUNITY</MobileLink>
    <MobileLink href="/contact" setMobileOpen={setMobileOpen}>CONTACT</MobileLink>

  </div>

    </header>
  );
}

/* ---------- Components ---------- */

function NavLink({ href, pathname, children }) {
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`${active ? "text-[#c74848]" : "text-white"
        } hover:text-[#c74848] transition`}
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, setMobileOpen, children }) {
  return (
    <Link href={href} onClick={() => setMobileOpen(false)}>
      {children}
    </Link>
  );
}

function Dropdown({ title, active, open, setOpen, children }) {
  const timeoutRef = useRef(null);

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <span
        className={`cursor-pointer ${active ? "text-[#c74848]" : "text-white"
          } hover:text-[#c74848]`}
      >
        {title}
      </span>

      {open && (
        <ul className="absolute top-8 left-0 bg-[#111] border border-gray-800 w-52 py-3">
          {children}
        </ul>
      )}
    </div>
  );
}

function DropdownItem({ href, label }) {
  return (
    <li className="px-5 py-2 hover:bg-gray-800">
      <Link href={href}>{label}</Link>
    </li>
  );
}