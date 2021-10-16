import { Link, List, ListItem, Container, Icon, Button, Heading } from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io5'
import { EmailIcon, ViewIcon } from "@chakra-ui/icons";

const Contact = () => {
  return (
    <Layout title="Contact">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Contact
        </Heading>
        <Section>
          <Paragraph>Nikolaj Johannes Skole Jensen</Paragraph>
          <List>
            <ListItem>
              <Link href="" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={EmailIcon} />}
                >
                  @nikolajjsj
                </Button>
              </Link>
            </ListItem>
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

export default Contact
