import React from "react";
import TopHeader from "../components/header/topHeader";
import MainHeader from "../components/header/mainHeader";
import InfoSlider from "../components/sections/sliders/infoSlider";
import Searchbox from "../components/sections/searchbox/searchbox";
import ProductSlider from "../components/sections/sliders/productSlider/productSlider";

function Home() {
  return (
    <div className="px-[5em]">
      <TopHeader />
      <MainHeader />
      <InfoSlider />
      <Searchbox />
      <ProductSlider />
    </div>
  );
}

export default Home;
