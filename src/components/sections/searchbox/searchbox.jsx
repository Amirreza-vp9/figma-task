import React from "react";
import Tabs from "./tabs";
import Filter from "./filter";

function Searchbox() {
  return (
    <div className="mt-[10em]">
      <Tabs />
      <Filter />
    </div>
  );
}

export default Searchbox;
