import { styled } from "../stitches.config";

interface Props {
  children?: React.ReactNode;
  title: string;
  thumbnail: string;
}

export const AppCard = ({ title, thumbnail, children }: Props) => {
  return (
    <s.Card>
      <s.CardImage height={300} src={thumbnail} alt={title} />

      <s.CardTitle>{title}</s.CardTitle>

      <s.CardDescription>{children}</s.CardDescription>
    </s.Card>
  );
};

namespace s {
  export const Card = styled("div", {
    borderRadius: "$md",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "$12",
  });

  export const CardImage = styled("img", {
    borderRadius: "8px",
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "cover",
  });

  export const CardTitle = styled("h3", {
    fontSize: "$lg",
    fontWeight: "bold",
    marginTop: "$2",
  });

  export const CardDescription = styled("p", {
    fontSize: "$sm",
  });
}
