import React from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

export const ListOfCategories = ({allCategories}) => {
  return (
    <List>
      {
      allCategories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))
      }
    </List>
  );
};
