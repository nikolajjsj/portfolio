import Link from "next/link";
import { styled } from "../../stitches.config";

export const Navbar = () => {
  return (
    <s.Navbar>
      <s.NavContent>
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
      </s.NavContent>
    </s.Navbar>
  );
};

namespace s {
  export const Navbar = styled("nav", {
    width: "100%",
  });

  export const NavContent = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBlock: "$4",
    width: "90%",
    margin: "0 auto",

    "@md": {
      width: "60%",
    },
  });

  export const Links = styled("div", {
    display: "flex",
  });

  export const NavbarLink = styled("a", {
    color: "$white",
    fontSize: "$xl",
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecoration: "none",

    "& + &": { marginLeft: "$4" },
  });
}
