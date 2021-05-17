import styled from "@emotion/styled";
import { Link } from "wouter";
import { bps } from "../../styles/index";

const generateMulticolorCategory = ({index}) => {
  const NEED_WHITE_COLOR = [1, 2, 5];
  const indexColor = (index % 5) + 1;
  let css = `
        background-color: var(--brand-color_${indexColor});
        color: ${
          NEED_WHITE_COLOR.includes(indexColor)
            ? "black"
            : "var(--theme-body_bg)"
        }
      `;
  return css;
};

export const CategoryTitle = styled.h3`
  color: var(--theme-body-txt);
  font-weight: bold;
  margin-bottom: 0.7rem;
  margin-top: 0.6rem;

  ${bps.greatherThanMobile} {
    & {
      text-align: right;
    }
  }
`;
export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  ${bps.greatherThanMobile} {
    & {
      justify-content: flex-end;
    }
  }
`;

export const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;
  ${generateMulticolorCategory}
`;
export const CategoryLink = styled(Link)`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
`;

/* 


@media screen and (min-width: 55rem) {


  .Category-list li::before {
    color: #8c55a2;
    margin-right: 0.5em;
    font-size: 1em;
  }
}

*/
