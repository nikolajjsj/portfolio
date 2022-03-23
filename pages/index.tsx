import { BsLinkedin } from "react-icons/bs";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { AppSection } from "../components/AppSection";
import { styled } from "../stitches.config";

export default function Home() {
  return (
    <s.Home>
      <s.HomeHeader>👋 Hello, my name is Nikolaj.</s.HomeHeader>
      <s.HomeSubHeader>
        I am a Software Engineer based in Aarhus, Denmark. Currently I&apos;m
        working at{" "}
        <a href="https://friggtech.dk" target="_blank" rel="noreferrer">
          Friggtech
        </a>{" "}
        as a fullstack engineer.
      </s.HomeSubHeader>

      <AppSection title="Work">
        <s.WorkSection>
          I am a full-stack developer working both as a freelancer, and employed
          at Friggtech doing frontend work. I have a passion for learning and
          building awesome digital services/stuff that i want. I love launching
          new products, from the planning and designing to solving real-life
          problems with well coded solutions. I have launched several app
          projects to both Google Play, Apple Appstore, and the internet. When
          not coding i enjoy tasting whisky, going on hikes, and reading sci-fi
          books.
        </s.WorkSection>
      </AppSection>

      <AppSection title="Bio">
        <s.BioElement>
          <b>2020</b>
          <p>Completed my Master&apos;s in Biology at Aarhus University</p>
        </s.BioElement>

        <s.BioElement>
          <b>2021 - 2022 </b>
          <p>Frontend developer @ Novicell</p>
        </s.BioElement>
        <s.BioElement>
          <b>2020 - now </b>
          <p>Freelance full-stack developer</p>
        </s.BioElement>
        <s.BioElement>
          <b>2022 - now </b>
          <p>Fullstack developer @ Friggtech</p>
        </s.BioElement>
      </AppSection>

      <AppSection title="Connect">
        <s.ConnectLink
          href="mailto: nikolajjsj@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <s.ConnectLinkIcon>
            <SiGmail size={22} />
          </s.ConnectLinkIcon>
          Email
        </s.ConnectLink>
        <s.ConnectLink
          href="https://www.linkedin.com/in/nikolaj-johannes-skole-jensen-73810b137/"
          target="_blank"
          rel="noreferrer"
        >
          <s.ConnectLinkIcon>
            <BsLinkedin size={22} />
          </s.ConnectLinkIcon>
          LinkedIn
        </s.ConnectLink>

        <s.ConnectLink
          href="https://github.com/nikolajjsj"
          target="_blank"
          rel="noreferrer"
        >
          <s.ConnectLinkIcon>
            <IoLogoGithub size={22} />
          </s.ConnectLinkIcon>
          GitHub
        </s.ConnectLink>

        <s.ConnectLink
          href="https://twitter.com/nikolajjsj"
          target="_blank"
          rel="noreferrer"
        >
          <s.ConnectLinkIcon>
            <IoLogoTwitter size={22} />
          </s.ConnectLinkIcon>
          Twitter
        </s.ConnectLink>
      </AppSection>
    </s.Home>
  );
}

namespace s {
  export const Home = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    paddingTop: "$20",
  });

  export const HomeHeader = styled("h1", {
    fontSize: "$4xl",
    fontWeight: "bold",
    marginBottom: "$4",
    maxWidth: "60ch",
  });

  export const HomeSubHeader = styled("h2", {
    fontSize: "$xl",
    marginBottom: "$12",
    fontStyle: "italic",
    lineHeight: "1.75rem",
    maxWidth: "60ch",

    "& > a": {
      textDecoration: "none",
      color: "inherit",
      fontWeight: "bold",
    },
  });

  export const WorkSection = styled("p", {
    maxWidth: "60ch",
    lineHeight: "1.5rem",
  });

  export const BioElement = styled("div", {
    marginBottom: "$4",

    "& > b": { fontWeight: "bold" },
    "& > p": { fontStyle: "italic" },
  });

  export const ConnectLink = styled("a", {
    display: "flex",
    alignItems: "center",
    color: "inherit",
  });

  export const ConnectLinkIcon = styled("div", {
    marginRight: "$4",
    color: "inherit",
  });
}
