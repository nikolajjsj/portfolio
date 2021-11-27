import React from 'react'
import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  Badge
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
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
  const posts: MediumResponse = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}


const Posts = ({items}: MediumResponse) => {

  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>

        <SimpleGrid columns={[1]} gap={6}>
          {items.map((post: MediumPost) => (
            <Section key={post.guid}>
              <MediumPost
                href={post.link}
                title={post.title}
                thumbnail={post.thumbnail}
              >
                {post.categories.map((category: string) => (
                  <Badge colorScheme="purple" mx={1} key={category}>
                    {category}
                  </Badge>
                ))}
              </MediumPost>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

const MediumPost = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <img
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          width="100%"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export default Posts
