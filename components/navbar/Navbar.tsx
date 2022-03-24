import Link from "next/link";
import { styled } from "../../stitches.config";

export const Navbar = () => {
  return (
    <s.Nav>
      <Link href="/" passHref={true}>
        <s.NavbarLink>Nikolaj Jensen</s.NavbarLink>
      </Link>

      <s.Links>
        <Link href="/works" passHref={true}>
          <s.NavbarLink>Works</s.NavbarLink>
        </Link>
        <Link href="/posts" passHref={true}>
          <s.NavbarLink>Posts</s.NavbarLink>
        </Link>
      </s.Links>
    </s.Nav>
  );
};

namespace s {
  export const Nav = styled("nav", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "$2 $6",
    maxWidth: "min(1024px, 60%)",
    margin: "0 auto",
  });

  export const Links = styled("div", {
    display: "flex",
  });

  export const NavbarLink = styled("a", {
    position: "relative",
    display: "inline-block",
    verticalAlign: "top",
    paddingBottom: "$6",
    color: "$white",
    fontSize: "$xl",
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecoration: "none",

    "& + &": { marginLeft: "$4" },

    "&:hover": {
      "&::before": {
        transform: "translateX(-50%)",
        borderRadius: "100%",
        position: "absolute",
        background: "$white",
        bottom: "10px",
        height: "8px",
        content: "",
        width: "8px",
        left: "50%",
      },
    },
  });
}
