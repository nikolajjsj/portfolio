import { styled } from "../stitches.config";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const AppSection = ({ children, title }: Props) => {
  return (
    <s.Section>
      {title && <s.SectionTitle>{title}</s.SectionTitle>}
      {children}
    </s.Section>
  );
};

namespace s {
  export const Section = styled("section", {
    marginBlock: "$8",
    display: "flex",
    flexDirection: "column",
  });

  export const SectionTitle = styled("h3", {
    fontSize: "3xl",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "$accent",
    marginBottom: "$4",
  });
}
