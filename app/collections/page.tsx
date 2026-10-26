import React from "react"

export default function CollectionsPage() {
    const products = [
    {
      id: 1,
      name: "Radiant Skin Tint SPF 30",
      category: "Complexion",
      price: "IDR 245.000",
      desc: "Sheer, hydrating skin tint that blurs imperfections naturally.",
      image: "/skintint.png"
    },
    {
      id: 2,
      name: "Satin Velvet Lipstick",
      category: "Lips",
      price: "IDR 185.000",
      desc: "Rich pigment with a buttery soft matte finish that never dries.",
      image: "/lipstick.png"
    },
    {
      id: 3,
      name: "Liquid Silk Blush",
      category: "Cheeks",
      price: "IDR 210.000",
      desc: "Lit-from-within flush that melts effortlessly into skin.",
      image: "/liquidblush.png"
    },
    {
      id: 4,
      name: "Luminous Setting Powder",
      category: "Complexion",
      price: "IDR 225.000",
      desc: "Weightless micro-fine powder that locks makeup in place all day.",
      image: "/powder.png"
    },
    {
      id: 5,
      name: "Precision Eyebrow Definer",
      category: "Eyes",
      price: "IDR 135.000",
      desc: "Ultra-fine tip pencil for natural hair-like strokes.",
      image: "/eyebrow.png"
    },
    {
      id: 6,
      name: "Lengthening Mascara",
      category: "Eyes",
      price: "IDR 175.000",
      desc: "Smudge-proof formula for dramatic length and separated lashes.",
      image: "/mascara.png"
    },
    {
      id: 7,
      name: "Hydrating Lip Gloss Oil",
      category: "Lips",
      price: "IDR 150.000",
      desc: "Non-sticky nourishing shine infused with botanical oils.",
      image: "/lipgloss.png"
    },
    {
      id: 8,
      name: "Dewy Highlighter Stick",
      category: "Cheeks",
      price: "IDR 195.000",
      desc: "Creamy multidimensional glow stick for instant radiance.",
      image: "/highlighter.png"
    }
  ];

  return (
    <div className="gb-container">


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
