interface Props {
  title: string,
  icon: string,
}

const SkillPill = ({ title, icon }: Props) => {
  return (
    <div className="flex rounded-full items-center overflow-hidden bg-gray-200 h-10 mr-4 my-1">
      <img className="rounded-full h-10 w-10" src={icon} />
      <code className="mx-2 text-sm font-semibold">{title}</code>
    </div>
  )
}

export default SkillPill
