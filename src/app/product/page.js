"use client";

import Header from "../components/Header";
import Products from "../Products/Product";
import data from "../db/data";
import Footer from "../components/Footer";
import BackToTopBtn from "../components/BackToTopBtn";
import CarSlider from "../components/CarSlider";
import Slides from "../components/Slides";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../components/Card";
import { useState } from "react";

function PostPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // const filteredItems = data.filter(
  //   (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(data, selected, query) {
    let filteredProducts = data;

    // Filtering Input Items
    // if (query) {
    //   filteredProducts = filteredItems;
    // }

    // Applying selected filter
    // if (selected) {
    //   filteredProducts = filteredProducts.filter(
    //     ({ category, color, logo, priceNew, name }) =>
    //       category === selected ||
    //       color === selected ||
    //       logo === selected ||
    //       priceNew === selected ||
    //       name === selected
    //   );
    // }

    // return filteredProducts.map (
    //   ({ image, name, star, reviews, priceNew, priceMonths }) => (
    //     <Card
    //       key={Math.random()}
    //       image={image}
    //       name={name}
    //       star={star}
    //       reviews={reviews}
    //       priceNew={priceNew}
    //       priceMonths={priceMonths}
    //     />
    //   )
    // );
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <>
      <Header />
      <Sidebar handleChange={handleChange} />
      {/* <Recommended handleClick={handleClick} /> */}
      <Products result={result} />
      <CarSlider />
      {/* <Card /> */}
      {/* <Slides /> */}
      <Footer />
      <BackToTopBtn />
    </>
  );
}

export default PostPage;
