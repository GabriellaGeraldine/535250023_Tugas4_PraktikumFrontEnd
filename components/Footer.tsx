import React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer>
            <div className="container-fluid footer-fill">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-5 order-3 order-md-3 order-lg-1 about">
                        <div id="footer-title">
                            <Link href="/" className="gb-nav-logo gabs">
                            GAB&apos;S <span>BEAUTY</span>
                            </Link>
                        </div>
                        <br />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 order-1 order-md-1 order-lg-2 links">
                        <br />
                        <div className="footer-links">
                            <Link href="/" className="footer-Link">Home</Link>
                            <Link href="/collections" className="footer-Link">Collections</Link>
                            <Link href="/profile" className="footer-Link">Profile</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 order-2 order-md-2 order-lg-3 contacts">
                        <h3>Contact</h3>
                        <br />
                        <p><i className="bi bi-geo-alt-fill"></i>Jakarta, Indonesia</p>
                        <br />
                        <div className="footer-socials">
                            <Link href="#" className="footer-Link"><i className="bi bi-envelope-fill"></i>Email</Link>
                            <Link href="#" className="footer-Link"><i className="bi bi-instagram"></i>Instagram</Link>
                            <Link href="#" className="footer-Link"><i className="bi bi-whatsapp"></i>WhatsApp</Link>
                        </div>
                    </div>
                </div>
            </div>
            <section id="copyright">
                <p>© {new Date().getFullYear()} {"GAB'S"} BEAUTY. Crafted with care for effortless daily elegance.</p>
            </section>
        </footer>
    );
};