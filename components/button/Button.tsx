import { styled } from "@stitches/react";

export const ButtonArrow = styled("div", {
  border: "solid",
  borderWidth: "0 4px 4px 0",
  borderColor: "$accent",
  display: "inline-block",
  padding: "4px",
  transform: "rotate(-45deg)",
  webkitTransform: "rotate(-45deg)",
  marginLeft: "$1",
  transition: "0.2s",
});

export const Button = styled("button", {
  display: "inline-block",
  color: "$white",
  fontWeight: "bold",
  fontSize: "$md",
  cursor: "pointer",

  variants: {
    variant: {
      ghost: {
        background: "inherit",
        border: "1px solid transparent",
      },
    },
  },

  [`&:hover ${ButtonArrow}`]: {
    marginLeft: "$4",
  },
});
