import AppCard from '../components/AppCard'
import AppSection from '../components/AppSection'

const Works = () => {
  return (
    <>
      <AppSection title="Works">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <AppCard
            href=""
            title="Codelabby"
            thumbnail="/images/projects/codelabby.png"
          >
            Learning platform for all people wanting to learn computer science.
          </AppCard>

          <AppCard
            href=""
            title="Sialia for Twitter"
            thumbnail="/images/projects/sialia.png"
          >
            Twitter client made with customization in mind.
          </AppCard>

          <AppCard
            href=""
            title="Sorting Visualizer"
            thumbnail="/images/projects/sorting.png"
          >
            Sorting visualizer
          </AppCard>

          <AppCard
            href=""
            title="Chess Timer"
            thumbnail="/images/projects/chess.png"
          >
            Functional and beautiful chess timer
          </AppCard>

          <AppCard
            href=""
            title="Sygeplejersken"
            thumbnail="/images/projects/sygeplejersken.png"
          >
            Tool for nurses and other health professionals
          </AppCard>
        </div>
      </AppSection>

      <AppSection title="Freelance projects">
        <div className="flex flex-col">
          <AppCard
            href=""
            title="Skipit"
            thumbnail="/images/works/skipit.jpg"
          >
            Worked on their First Time User Flow + various other parts of the app.
          </AppCard>

          <AppCard
            href=""
            title="Raven Biosciences"
            thumbnail="/images/works/raven.jpeg"
          >
            Worked as a consultant for Raven Biosciences.
          </AppCard>

          <AppCard
            href=""
            title="LifeBonder"
            thumbnail="/images/works/lifebonder.png"
          >
            Worked on the login flow for their app Lifebonder.
          </AppCard>
        </div>
      </AppSection>
    </>
  )
}

export default Works
