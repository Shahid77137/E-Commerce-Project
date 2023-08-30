import React from "react";
import { productdata } from "../../../data";
import ProductCard from "../ProductCard/ProductCard";

const ProductPage = () => {
  return (
    <div className="px-10 -z-10">
      {/* heading part */}
      <div className="flex justify-between py-5">
        <p className="font-bold">Filter</p>
        <p>Sort</p>
      </div>

      {/* bottom part */}
      <div className="flex justify-between ">
        {/* filter */}
        <div className="w-[20%] border rounded-md bg-white"></div>
        {/* product */}

        <div className="flex  flex-wrap justify-between w-[78%] bg-white border p-5 rounded-md">
          {productdata.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
