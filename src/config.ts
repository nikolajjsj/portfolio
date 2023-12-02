import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://nikolajjsj.com/",
  author: "Nikolaj Jensen",
  desc: "Personal Portfolio",
  title: "Portfolio",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/nikolajjsj",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@nikolajjsj",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
