import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";


const SIZES = {
  small: "1rem",
  medium: "2rem",
  large: "3rem",
};

const getFontSize = ({ size }) => {
  const fontSize = SIZES[size];

  if (!fontSize) {
    console.warn(
      `[ButtonStyleComponent] This size ${size} is not correct. use ${Object.keys(
        SIZES
      ).join(", ")}`
    );
  }

  return fontSize;
};

export const Link = styled(LinkWouter)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  font-size: ${getFontSize};
  padding: 0.5rem 1rem;
  &:hover {
    background-color: var(--brand-color_2);
  }

  [disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Button = Link.withComponent("button");
