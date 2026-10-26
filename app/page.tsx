import React from 'react';
import Link from 'next/link';
import './globals.css';

export default function GabsBeautyHomePage() {
  return (
    <div className="gb-container">

      <section className="gb-hero">
        <div className="gb-hero-pattern"></div>
        
        <h1 className="gb-title">
          {"GAB'S"} <span className="gb-title-highlight">BEAUTY</span>
        </h1>
        
        <p className="gb-subtitle">
          Enhance your natural radiance with effortless formulas designed for everyday elegance. Clean ingredients, weightless textures, and timeless shades crafted just for you.
        </p>

        <div className="gb-cta-group">
          <Link href="#best-sellers" className="gb-btn-primary">
            Explore Best Sellers
          </Link>
          <Link href="#about" className="gb-btn-outline">
            Our Philosophy
          </Link>
        </div>
      </section>

      <section id="about" className="gb-section">
        <div className="gb-section-header">
          <h2 className="gb-heading">The Art of Effortless Beauty</h2>
          <p className="gb-desc">
            At {"GAB'S"} BEAUTY, we believe makeup should amplify your unique features rather than mask them. Every product is thoughtfully formulated to feel like a second skin.
          </p>
        </div>

        <div className="gb-grid-3">
          <div className="gb-feature-card">
            <div className="gb-card-num">01</div>
            <h3 className="gb-card-title">Clean & Safe</h3>
            <p className="gb-card-text">Formulated without parabens, sulfates, or harsh chemicals. Dermatologist tested and 100% cruelty-free.</p>
          </div>

          <div className="gb-feature-card">
            <div className="gb-card-num">02</div>
            <h3 className="gb-card-title">Weightless Wear</h3>
            <p className="gb-card-text">Breathable, buildable textures that blend seamlessly for all-day comfort from morning meetings to evening dinners.</p>
          </div>

          <div className="gb-feature-card">
            <div className="gb-card-num">03</div>
            <h3 className="gb-card-title">Timeless Shades</h3>
            <p className="gb-card-text">Carefully curated universal tones designed to complement every skin undertone effortlessly.</p>
          </div>
        </div>
      </section>

      <section id="best-sellers" className="gb-section gb-tint-bg">
        <div className="gb-max-w">
          <div className="gb-flex-between">
            <div>
              <span className="gb-tag">Iconic Lineup</span>
              <h2 className="gb-heading mt-1">Best Sellers</h2>
            </div>
            <span className="gb-sub-note">The community favourites</span>
          </div>

          <div className="gb-grid-3">

            <div className="gb-product-card">
              <div className="gb-product-img">
                <span className="gb-img-text">
                  <img className="gambar-product" src="/skintint.png" alt="" />
                </span>
              </div>
              <div className="gb-product-body">
                <span className="gb-product-cat">Complexion</span>
                <h3 className="gb-product-name">Radiant Skin Tint SPF 30</h3>
                <p className="gb-product-p">Sheer, hydrating skin tint that blurs imperfections naturally.</p>
                <div className="gb-product-footer">
                  <span className="gb-price">IDR 245.000</span>
                </div>
              </div>
            </div>

            <div className="gb-product-card">
              <div className="gb-product-img">
                <span className="gb-img-text">
                  <img className="gambar-product" src="/lipstick.png" alt="" />
                </span>
              </div>
              <div className="gb-product-body">
                <span className="gb-product-cat">Lips</span>
                <h3 className="gb-product-name">Satin Velvet Lipstick</h3>
                <p className="gb-product-p">Rich pigment with a buttery soft matte finish that never dries.</p>
                <div className="gb-product-footer">
                  <span className="gb-price">IDR 185.000</span>
                </div>
              </div>
            </div>

            <div className="gb-product-card">
              <div className="gb-product-img">
                <span className="gb-img-text">
                  <img className="gambar-product" src="/liquidblush.png" alt="" />
                </span>
              </div>
              <div className="gb-product-body">
                <span className="gb-product-cat">Cheeks</span>
                <h3 className="gb-product-name">Liquid Silk Blush</h3>
                <p className="gb-product-p">Lit-from-within flush that melts effortlessly into skin.</p>
                <div className="gb-product-footer">
                  <span className="gb-price">IDR 210.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}