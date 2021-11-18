import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

import thumbCodelabby from '../public/images/projects/codelabby.png'
import thumbSialia from '../public/images/projects/sialia.png'
import thumbChess from '../public/images/projects/chess.png'
import thumbSygeplejersken from '../public/images/projects/sygeplejersken.png'
import thumbSorting from '../public/images/projects/sorting.png'
import thumbSkipit from '../public/images/works/skipit.jpg'
import thumbRaven from '../public/images/works/raven.jpeg'
import thumbLifebonder from '../public/images/works/lifebonder.png'

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
              thumbnail={thumbCodelabby}
            >
              Learning platform for all people wanting to learn computer science.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="sialia"
              title="Sialia for Twitter"
              thumbnail={thumbSialia}
            >
              Twitter client made with customization in mind.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="sorting"
              title="Sorting Visualizer"
              thumbnail={thumbSorting}
            >
              Sorting visualizer
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="chess"
              title="Chess Timer"
              thumbnail={thumbChess}
            >
              Chess timer
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="sygeplejersken"
              title="Sygeplejersken"
              thumbnail={thumbSygeplejersken}
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

        <SimpleGrid columns={[1]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="skipit"
              thumbnail={thumbSkipit}
              title="Skipit"
            >
              Worked on their First Time User Flow + various other parts of the app.
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="raven"
              thumbnail={thumbRaven}
              title="Raven Biosciences"
            >
              Worked as a consultant for Raven Biosciences.
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="lifebonder"
              thumbnail={thumbLifebonder}
              title="Lifebonder"
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
