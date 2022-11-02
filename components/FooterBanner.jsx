/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/sanity";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeTex2,
    desc,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeTex2}</h3>
          <p>{saleTime}</p>
        </div>

        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img
          src={urlFor(image).url()}
          alt="Footer Image"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
