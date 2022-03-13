import HeroSlider from "./components/HeroSlider";
import Head from "next/head";
import React, { useState } from "react";
import ProductCard from "./components/product/ProductCard";
import { getData } from "../utils/fetchData";

const Home = (props) => {
  const [products, setProducts] = useState(props.products);

  return (
    <div className="products">
      <Head>
        <title>Home</title>
      </Head>

      <div className="container row">
        <HeroSlider />

        {products.length == 0 ? (
          <h2>No Product Available</h2>
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await getData("product");
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}

export default Home;
