import { Container, Heading } from "@chakra-ui/react";
import Layout from '../components/layouts/article'
import ContactInfo from '../components/contact-info'

const Contact = () => {
  return (
    <Layout title="Contact">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Contact
        </Heading>
        <ContactInfo />
      </Container>
    </Layout>
  )
}

export default Contact
