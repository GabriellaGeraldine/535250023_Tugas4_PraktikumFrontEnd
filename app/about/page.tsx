import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Gabriella Geraldine",
      role: "Founder & Lead Formulator",
      bio: "Passionate about clean beauty and effortless everyday wear."
    },
    {
      name: "Monica Irene",
      role: "Creative Director",
      bio: "Directing timeless aesthetics and brand visual identity."
    },
    {
      name: "Denzel Mark Wahyudi",
      role: "Operations & Sustainability",
      bio: "Ensuring cruelty-free sourcing and eco-conscious packaging."
    }
  ];

  return (
    <div className="gb-container">

      <section className="gb-hero" style={{ padding: '4rem 1.5rem' }}>
        <span className="gb-badge">About Us</span>
        <h1 className="gb-title">THE STORY OF <span className="gb-title-highlight">{"GAB'S"} BEAUTY</span></h1>
        <p className="gb-subtitle">
          Modern cosmetics crafted with integrity, simplicity, and a deep appreciation for natural elegance.
        </p>
      </section>

      <section className="gb-section" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="gb-max-w" style={{ maxWidth: '48rem' }}>
          
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="gb-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sejarah Singkat Brand</h2>
            <p className="gb-desc" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              Didirikan pada tahun 2024 oleh Gabriella Geraldine, {"GAB'S"} BEAUTY berawal dari kebutuhan akan produk makeup sehari-hari yang praktis, ringan di kulit, dan aman tanpa bahan kimia berbahaya. Berfokus pada konsep <em>clean beauty</em>, brand ini berkembang menjadi pilihan esensial bagi mereka yang menghargai kecantikan natural dan efisiensi waktu.
            </p>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 className="gb-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tentang Produk Kami</h2>
            <p className="gb-desc" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              Seluruh rangkaian produk {"GAB'S"} BEAUTY diformulasikan 100% bebas paraben, cruelty-free, dan dirancang dengan tekstur <em>weightless</em> agar nyaman digunakan seharian. Kami memadukan bahan-bahan ramah kulit dengan warna universal yang menyatu sempurna di setiap warna kulit wanita Indonesia.
            </p>
          </div>

        </div>
      </section>

      <section className="gb-section gb-tint-bg" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="gb-max-w">
          <div className="gb-section-header" style={{ marginBottom: '3rem' }}>
            <span className="gb-tag">The People</span>
            <h2 className="gb-heading mt-1">Our Team</h2>
            <p className="gb-sub-text">Orang-orang di balik layar yang berdedikasi membangun {"GAB'S"} BEAUTY.</p>
          </div>

          <div className="gb-grid-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="gb-feature-card" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                <div className="gb-card-num" style={{ width: '2.5rem', height: '2.5rem', fontSize: '0.875rem' }}>
                  0{index + 1}
                </div>
                <h3 className="gb-card-title" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                <span className="gb-product-cat" style={{ marginBottom: '0.75rem' }}>{member.role}</span>
                <p className="gb-card-text" style={{ textAlign: 'left' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
