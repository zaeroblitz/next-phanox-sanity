import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../lib/sanity";

const Product = ({ product: { name, slug, image, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <div className="relative product-image">
            <Image
              src={urlFor(image && image[0]).url()}
              width={250}
              height={250}
              alt={name}
            />
          </div>
          <p className="product-name">{name}</p>
          <p className="product-price">$ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
