import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="codelabby"
              title="Codelabby"
              thumbnail="/images/projects/codelabby.png"
            >
              Learning platform for all people wanting to learn computer science.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="sialia"
              title="Sialia for Twitter"
              thumbnail="/images/projects/sialia.png"
            >
              Twitter client made with customization in mind.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="sorting"
              title="Sorting Visualizer"
              thumbnail="/images/projects/sorting.png"
            >
              Sorting visualizer
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="chess"
              title="Chess Timer"
              thumbnail="/images/projects/chess.png"
            >
              Chess timer
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="sygeplejersken"
              title="Sygeplejersken"
              thumbnail="/images/projects/sygeplejersken.png"
            >
              The tool for nurses and other health professionals
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Freelance projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="skipit"
              title="Skipit"
              thumbnail="/images/works/skipit.jpg"
            >
              Worked on their First Time User Flow + various other parts of the app.
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="raven"
              title="Raven Biosciences"
              thumbnail="/images/works/raven.jpeg"
            >
              Worked as a consultant for Raven Biosciences.
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="lifebonder"
              title="Lifebonder"
              thumbnail="/images/works/lifebonder.png"
            >
              Worked on the login flow for their app Lifebonder.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
