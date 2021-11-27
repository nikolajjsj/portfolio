import React from 'react'
import { Container, Heading, SimpleGrid, Badge } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
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
  // Call an external API endpoint to get posts
  const res = await fetch(URL)
  const response: MediumResponse = await res.json()
  const posts: MediumPost[] = response.items

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { posts }
  }
}

const Posts = ({ posts }) => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>

        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          {posts &&
            posts.map((post: MediumPost) => (
              <Section key={post.guid}>
                <WorkGridItem
                  id={post.guid}
                  title={post.title}
                  thumbnail={post.thumbnail}
                >
                  {post.categories.map((category: string) => (
                    <Badge colorScheme="purple" mx={1} key={category}>
                      {category}
                    </Badge>
                  ))}
                </WorkGridItem>
              </Section>
            ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts
