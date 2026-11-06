import React from "react"
import CollectionsCarousel from '@/components/CollectionsCarousel';

export default function CollectionsPage() {
    const products = [
    {
      id: 1,
      name: "Dewy Glow Sunscreen",
      category: "Sunscreen",
      price: "IDR 250.000",
      desc: "Glowing sunscreen that protect your face perfectly.",
      image: "/sunscreen.png"
    },
    {
      id: 2,
      name: "Radiant Skin Foundation",
      category: "Complexion",
      price: "IDR 280.000",
      desc: "Weightless foundation that blurs your pores naturally.",
      image: "/foundation.png"
    },
    {
      id: 3,
      name: "Airy Fit Cushion",
      category: "Complexion",
      price: "IDR 295.000",
      desc: "Weightless cushion that gives you natural looks with high coverage.",
      image: "/cushion.png"
    },
    {
      id: 4,
      name: "Blooming Loose Powder",
      category: "Complexion",
      price: "IDR 225.000",
      desc: "Weightless micro-fine powder that locks makeup in place all day.",
      image: "/powder.png"
    },
    {
      id: 5,
      name: "Charming Liquid Blush",
      category: "Cheeks",
      price: "IDR 195.000",
      desc: "Liquid blush that can enhance your beauty looks.",
      image: "/blush.png"
    },
    {
      id: 6,
      name: "Soft Dream Eyeshadow Pallete",
      category: "Eyes",
      price: "IDR 210.000",
      desc: "Soft color eyeshadow pallete with various selection of colors.",
      image: "/eyeshadow.png"
    },
    {
      id: 7,
      name: "Precision Eyebrow Definer",
      category: "Eyes",
      price: "IDR 135.000",
      desc: "Ultra-fine tip pencil for natural hair-like strokes.",
      image: "/eyebrow.png"
    },
    {
      id: 8,
      name: "Glossy Lip Tint",
      category: "Lips",
      price: "IDR 165.000",
      desc: "Non-sticky nourishing shine infused with botanical oils.",
      image: "/glossytint.png"
    },
    {
      id: 9,
      name: "Velvet Lipitnt",
      category: "Lips",
      price: "IDR 155.000",
      desc: "Indulge your lips in a weightless, velvety-soft matte formula that delivers rich, long-lasting color with a plush, comfortable finish.",
      image: "/velvetliptint.png"
    },
    {
      id: 10,
      name: "Dewy Highlighter Stick",
      category: "Cheeks",
      price: "IDR 185.000",
      desc: "Creamy multidimensional glow stick for instant radiance.",
      image: "/highlighter1.png"
    },
    {
      id: 11,
      name: "Hydra Mist Setting Spray",
      category: "Spray",
      price: "IDR 175.000",
      desc: "A long lasting spray that locks your makeup all day.",
      image: "/spray.png"
    },
  ];

  return (
    <div className="gb-container">
      <CollectionsCarousel />

      <section className="gb-hero" style={{ padding: '4rem 1.5rem' }}>
        <span className="gb-badge">Full Catalog</span>
        <h1 className="gb-title">{"GAB'S"} <span className="gb-title-highlight">COLLECTIONS</span></h1>
        <p className="gb-subtitle">
          Explore our complete range of clean, high-performance cosmetics formulated to celebrate your natural beauty.
        </p>
      </section>

      <section className="gb-section" style={{ paddingTop: '1rem' }}>
        <div className="gb-max-w">
          <div className="gb-flex-between" style={{ marginBottom: '2rem' }}>
            <div>
              <h2 className="gb-heading">All Products</h2>
              <span className="gb-sub-note">Showing 8 essential items</span>
            </div>
          </div>

          <div className="gb-grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {products.map((product) => (
              <div key={product.id} className="gb-product-card">
                <div className="gb-product-img">
                  <img className="gambar-product"src={product.image} alt="{product.image}" />
                </div>
                <div className="gb-product-body">
                  <span className="gb-product-cat">{product.category}</span>
                  <h3 className="gb-product-name">{product.name}</h3>
                  <p className="gb-product-p">{product.desc}</p>
                  <div className="gb-product-footer">
                    <span className="gb-price">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
