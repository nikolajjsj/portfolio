export type MediumFeed = {
  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
};

export type MediumResponse = {
  feed: MediumFeed;
  items: MediumPost[];
};

export type MediumPost = {
  author: string;
  categories: string[];
  content: string;
  description: string;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};
