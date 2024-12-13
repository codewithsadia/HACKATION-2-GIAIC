import React from "react";
import Image from "next/image";

const Product = () => {
  const images = [
    "sho0.png",
    "bal2.png",
    "sho2.png",
    "sho3.png",
    "bla1.png",
    "bal3.png",
    "ws1.png",
    "ws2.png",
    "ws3.png",
    "n1.png",
    "n2.png",
    "n3.png",
    "r1.png",
    "r2.png",
    "r3.png",
    "s1.png",
    "s2.png",
    "s3.png",
    "s4.png",
    "s5.png",
    "s6.png",
    "s7.png",
    "s8.png",
    "s9.png",
    "s10.png",
    "s11.png",
    "s12.png",
    "s13.png",
    "s14.png",
    "s15.png",
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    {images.map((img, index) => (
      <Image
        key={index}
        src={`/images/${img}`}
        alt={`Shoe ${index + 1}`}
        width={300}
        height={300}
        className="rounded-md "
        loading="lazy" // Lazy loading
      />
    ))}
  </div>

  );
};

export default Product;
