import React from "react";
import { ListOfCategories } from "../../components/ListOfCategories/index.js";
import { ListOfPhotoCard } from "../../components/ListOfPhotoCard/index.js";

export const Home = () => {
  return (
    <div>
      <ListOfCategories />
      <ListOfPhotoCard />
    </div>
  );
};
