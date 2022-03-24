interface MediumFeed {
  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
}

interface MediumResponse {
  feed: MediumFeed;
  items: MediumPost[];
}

export interface MediumPost {
  author: string;
  categories: string[];
  content: string;
  description: string;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

const USERNAME = "nikolajjsj";
const URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${USERNAME}`;

export const fetchMediumPosts = async (
  preview: boolean
): Promise<MediumPost[]> => {
  const res = await fetch(URL);
  const response: MediumResponse = await res.json();
  const posts: MediumPost[] = response.items;
  if (preview) {
    return posts.slice(0, 2);
  }
  return posts;
};
