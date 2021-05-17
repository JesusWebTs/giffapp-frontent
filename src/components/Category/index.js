import React from "react";
import {
  CategoryLink,
  CategoryList,
  CategoryListItem,
  CategoryTitle,
} from "./styles";

export default function Category({ name, options = [] }) {
  return (
    <div className="Category">
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index}>
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </div>
  );
}
