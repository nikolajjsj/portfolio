import NextLink from 'next/link'
import { Box, Link, Icon, List, ListItem, Container, Heading, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon, ViewIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io5'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={6}
          textAlign="center"
        >
          👋 Hello, I&apos;m a full-stack App & Web developer based in Denmark!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">Nikolaj Jensen</Heading>
            <p>Digital Wizard (  Developer / Learner / Robot )</p>
          </Box>

          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/headshot.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>I am a full-stack developer working both as a freelancer,
            and employed at Novicell doing frontend work. I have a passion for
            learning and building awesome digital services/stuff that i want. I love
            launching new products, from the planning and designing to solving
            real-life problems with well coded solutions.
            I have launched several app projects to both Google Play and Apple Appstore.
            When not coding i enjoy tasting whisky, going on hikes, and reading sci-fi books.
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Denmark.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Master&apos;s program in Biology at Aarhus University
          </BioSection>
          <BioSection>
            <BioYear>2020 - present</BioYear>
            Works as a freelance full-stack developer
          </BioSection>
          <BioSection>
            <BioYear>2021 - present</BioYear>
            Working at Novicell!
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/nikolajjsj" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @nikolajjsj
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/nikolaj-johannes-skole-jensen-73810b137/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={ViewIcon} />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/nikolajjsj" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @nikolajjsj
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/nikolajjsj" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @nikolajjsj
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
