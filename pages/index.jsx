import React from "react";
import { client } from "../lib/sanity";
import { HeroBanner, FooterBanner, Product } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Speaker There are many varations passages</p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
}
