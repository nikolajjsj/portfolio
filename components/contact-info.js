import { List, ListItem, Button, Link, Icon } from '@chakra-ui/react'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'


const ContactInfo = () => {
  return (
    <List>
      <ListItem>
        <Link href="" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiGmail} />}
          >
            nikolajjsj@gmail.com
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.linkedin.com/in/nikolaj-johannes-skole-jensen-73810b137/" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={BsLinkedin} />}
          >
            LinkedIn - profile
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

  )
}

export default ContactInfo
