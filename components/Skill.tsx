import { styled } from "../stitches.config";

interface Props {
  title: string;
  icon: string;
}

export const SkillIcon = ({ title, icon }: Props) => {
  return <s.SkillIcon src={icon} alt={title + " logo"} />;
};

namespace s {
  export const SkillIcon = styled("img", {
    height: "$10",
    width: "$10",
    borderRadius: "50%",
  });
}
