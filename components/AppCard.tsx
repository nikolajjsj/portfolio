interface Props {
  children?: React.ReactNode,
  props?: any,
  href: string
  title: string
  thumbnail: string
}

const AppCard = ({ title, thumbnail, children, props }: Props) => {
  return (
    <div className="rounded-lg flex flex-col" {...props}>
      <img
        className="rounded-lg w-full aspect-video"
        src={thumbnail}
        alt={title}
        width="100%"
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="font-sm">{children}</p>
    </div>
  )
}

export default AppCard
