import React from 'react'
import AppCard from '../components/AppCard'
import AppSection from '../components/AppSection'

interface MediumFeed {
  author: string
  description: string
  image: string
  link: string
  title: string
  url: string
}

interface MediumPost {
  author: string
  categories: string[]
  content: string
  description: string
  guid: string
  link: string
  pubDate: string
  thumbnail: string
  title: string
}

interface MediumResponse {
  feed: MediumFeed
  items: MediumPost[]
}

const USERNAME = 'nikolajjsj'
const URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${USERNAME}`

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch(URL)
  const response: MediumResponse = await res.json()
  const posts: MediumPost[] = response.items

  return {
    props: { posts }
  }
}

interface Props {
  posts: MediumPost[],
}

const Posts = ({ posts }: Props) => {
  return (
    <AppSection title="Posts">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts && posts.map((post: MediumPost) => (
          <AppCard
            key={post.guid}
            href={post.link}
            title={post.title}
            thumbnail={post.thumbnail}
          >
            <p className="text-center">
              {post.categories.map((category: string) => (
                <span
                  className="inline-block align-middle mr-2 whitespace-nowrap px-2 text-purple-400 bg-purple-200 font-semibold rounded"
                  key={category}
                >
                  {category}
                </span>
              ))}
            </p>
          </AppCard>
        ))
        }
      </div>
    </AppSection>
  )
}

export default Posts
