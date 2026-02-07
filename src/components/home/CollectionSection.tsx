import React from 'react';
import './CollectionSection.css';
import productBgImg from '@/assets/HomeImages/product.jpg';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  link: string;
  soldOut?: boolean;
}

const products: Product[] = [
  {
    id: '1',
    name: 'BSG Tetrapur 154 (PU Binder)',
    price: 'Rs. 310/kg',
    image: '//www.sportsinfra.store/cdn/shop/files/24_3f31993a-7eb1-427d-a89b-6ef0083440fc.jpg?v=1764046759',
    link: '/products/pu-binder',
  },
  {
    id: '2',
    name: 'BSG Tetrapur 110 Bicomponent (PU Sealer)',
    price: 'Rs. 410/kg',
    image: '//www.sportsinfra.store/cdn/shop/files/33_4fb71e03-e848-4f7a-a70b-22f104dd73a2.jpg?v=1764046844',
    link: '/products/pu-sealer',
    soldOut: true,
  },
  {
    id: '3',
    name: 'BSG Tetrapur 136 Bicomponent (PU Topcoat)',
    price: 'Rs. 440/kg',
    image: '//www.sportsinfra.store/cdn/shop/files/32_e3244968-ef61-479d-a49e-3cafa19b646f.jpg?v=1764046803',
    link: '/products/pu-topcoat',
    soldOut: true,
  },
  {
    id: '4',
    name: 'BSG Tetrapur 134 (PU Spray)',
    price: 'Rs. 420/kg',
    image: '//www.sportsinfra.store/cdn/shop/files/31_eb7d8d23-494b-4af6-91c8-25d10dee8a7a.jpg?v=1764046126',
    link: '/products/pu-spray',
    soldOut: true,
  },
  {
    id: '5',
    name: 'BSG Tetrapur 100TI (PU Adhesive / Glue)',
    price: 'Rs. 260/kg',
    image: '//www.sportsinfra.store/cdn/shop/files/ImagesTurf_3.jpg?v=1755145145',
    link: '/products/bytech-pu-adhesive-glue',
  },
];

export const CollectionSection: React.FC = () => {
  return (
    <section className="py-0 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="collection-products">
          <div 
            className="thecollectioncontent"
            style={{
              backgroundImage: `url(${productBgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="collection-overlay"></div>

            <div className="collection-title">
              <small className="pagesubtitle">Explore</small>
              <h2>Polyurethane (PU)</h2>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="card-wrapper product-card-wrapper">
                  <div className="card__inner">
                    <div className="card__media">
                      <div className="media">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                    {product.soldOut && (
                      <div className="card__badge">
                      </div>
                    )}
                  </div>
                  <div className="card__content">
                    <div className="card__information">
                      <h3 className="card__heading">
                        <a href={product.link} className="full-unstyled-link">
                          {product.name}
                        </a>
                      </h3>
                    </div>
                    <div className="price-container mt-2">
                       <div className="price">
                        {product.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="btnrow">
              <a href="/products?category=Polyurethane (PU)" className="skew-button">
                <span className="tt">View All →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
