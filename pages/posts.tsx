import { useEffect, useState } from 'react'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'

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

const Posts = () => {
  const [posts, setPosts] = useState<MediumPost[]>([])

  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then((p: MediumResponse) => setPosts(p.items))
  }, [])

  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>

        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          {posts.map((post: MediumPost) => (
            <Section key={post.guid}>
              <GridItem
                href={post.link}
                title={post.title}
                thumbnail={post.thumbnail}
              >
                {post.description}
              </GridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts
