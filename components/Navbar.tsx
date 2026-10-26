import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="gb-navbar">
      <div className="gb-nav-container">
        <Link href="/" className="gb-nav-logo">
          {"GAB'S"} <span>BEAUTY</span>
        </Link>
        <div className="gb-nav-links">
          <Link href="/" className="gb-nav-link active">Home</Link>
          <Link href="/collections" className="gb-nav-link">Collections</Link>
          <Link href="/profile" className="gb-nav-link">Profile</Link>
        </div>
      </div>
    </nav>
  );
};