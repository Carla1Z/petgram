import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
