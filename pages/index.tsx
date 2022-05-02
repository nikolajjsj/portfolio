import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { AppSection } from "../components/AppSection";
import { ButtonArrow, Button } from "../components/button/Button";
import { fetchMediumPosts, MediumPost } from "../services/medium_service";
import { styled } from "../stitches.config";

export async function getStaticProps() {
  const posts = await fetchMediumPosts(true);
  return { props: { posts } };
}

interface Props {
  posts: MediumPost[];
}

export default function Home({ posts }: Props) {
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
          projects to both{" "}
          <a
            href="https://play.google.com/store/apps/developer?id=Nikolaj+Jensen"
            target="_blank"
            rel="noreferrer"
          >
            Google Play
          </a>
          ,{" "}
          <a
            href="https://apps.apple.com/us/developer/nikolaj-jensen/id1487634697"
            target="_blank"
            rel="noreferrer"
          >
            Apple Appstore
          </a>
          , and the internet. When not coding i enjoy tasting whisky, going on
          hikes, and reading sci-fi books.
        </s.WorkSection>
      </AppSection>

      <AppSection title="Technologies">
        <s.Technologies>
          <s.TechnologyItem src="images/icons/go.svg" />
          <s.TechnologyItem src="images/icons/typescript-icon.svg" />
          <s.TechnologyItem src="images/icons/flutter.svg" />
          <s.TechnologyItem src="images/icons/react.svg" />
          <s.TechnologyItem src="images/icons/graphql.svg" />
          <s.TechnologyItem src="images/icons/vue.svg" />
          <s.TechnologyItem src="images/icons/mongodb.svg" />
          <s.TechnologyItem src="images/icons/postgresql.svg" />
        </s.Technologies>
      </AppSection>

      {posts && (
        <AppSection title="Posts">
          {posts.map((post: MediumPost) => (
            <s.Post key={post.guid} title={post.title}>
              <s.PostDate>{post.pubDate.split(" ")[0]}</s.PostDate>

              <s.PostTitle href={post.link} target="_blank" rel="noreferrer">
                {post.title}
              </s.PostTitle>
            </s.Post>
          ))}

          <Link href="/posts" passHref={true}>
            <Button variant="ghost">
              More <ButtonArrow />
            </Button>
          </Link>
        </AppSection>
      )}

      <AppSection title="Bio">
        <s.BioElement>
          <b>2022 - now </b>
          <p>Fullstack developer @ Friggtech</p>
        </s.BioElement>

        <s.BioElement>
          <b>2020 - now </b>
          <p>Freelance fullstack developer</p>
        </s.BioElement>

        <s.BioElement>
          <b>2021 - 2022 </b>
          <p>Frontend developer @ Novicell</p>
        </s.BioElement>

        <s.BioElement>
          <b>2020</b>
          <p>Completed my Master&apos;s in Biology at Aarhus University</p>
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

  export const Technologies = styled("div", {
    maxWidth: "50ch",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    gap: "$4",
  });

  export const TechnologyItem = styled("img", {
    height: 60,
    width: 60,
    background: "white",
    padding: "3px",
    borderRadius: "50%",
  });

  export const WorkSection = styled("p", {
    maxWidth: "60ch",
    lineHeight: "1.5rem",

    "& > a": {
      textDecoration: "none",
      color: "inherit",
      fontWeight: "bold",
    },
  });

  export const Post = styled("div", {
    display: "flex",
    flexDirection: "column",
  });

  export const PostDate = styled("p", {
    color: "$grey2",
    marginBottom: "$1",
  });

  export const PostTitle = styled("a", {
    fontSize: "$2xl",
    fontWeight: "bold",
    marginBottom: "$12",
    textDecoration: "none",
    color: "inherit",
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
    marginBottom: "$4",
  });

  export const ConnectLinkIcon = styled("div", {
    marginRight: "$4",
    color: "inherit",
  });
}
