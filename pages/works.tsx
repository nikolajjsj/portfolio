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
            title="Supercasts"
            thumbnail="/images/projects/supercasts.png"
          >
            Fully featured Podcast client, made with Flutter.
          </AppCard>

          <AppCard
            title="Sialia for Twitter"
            thumbnail="/images/projects/sialia.png"
          >
            Twitter client made with customization in mind, made with Flutter.
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
        </s.WorkSection>
      </AppSection>
    </>
  );
}

namespace s {
  export const WorkSection = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  });
}
