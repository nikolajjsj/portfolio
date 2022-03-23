import { AppCard } from "../components/AppCard";
import { AppSection } from "../components/AppSection";
import { styled } from "../stitches.config";

export default function Works() {
  return (
    <>
      <AppSection title="Works">
        <s.WorkSection>
          <AppCard title="Codelabby" thumbnail="/images/projects/codelabby.png">
            Learning platform for all people wanting to learn computer science.
          </AppCard>

          <AppCard
            title="Sialia for Twitter"
            thumbnail="/images/projects/sialia.png"
          >
            Twitter client made with customization in mind.
          </AppCard>

          <AppCard
            title="Sorting Visualizer"
            thumbnail="/images/projects/sorting.png"
          >
            Sorting visualizer
          </AppCard>

          <AppCard title="Chess Timer" thumbnail="/images/projects/chess.png">
            Functional and beautiful chess timer
          </AppCard>

          <AppCard
            title="Sygeplejersken"
            thumbnail="/images/projects/sygeplejersken.png"
          >
            Tool for nurses and other health professionals
          </AppCard>
        </s.WorkSection>
      </AppSection>

      <AppSection title="Freelance projects">
        <s.WorkSection>
          <AppCard title="Skipit" thumbnail="/images/works/skipit.jpg">
            Worked on their First Time User Flow + various other parts of the
            app.
          </AppCard>

          <AppCard
            title="Raven Biosciences"
            thumbnail="/images/works/raven.jpeg"
          >
            Worked as a consultant for Raven Biosciences.
          </AppCard>

          <AppCard title="LifeBonder" thumbnail="/images/works/lifebonder.png">
            Worked on the login flow for their app Lifebonder.
          </AppCard>
        </s.WorkSection>
      </AppSection>
    </>
  );
}

namespace s {
  export const WorkSection = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "$4",

    "@lg": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  });
}
