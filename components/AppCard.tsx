interface Props {
  children?: React.ReactNode,
  props?: any,
  href: string
  title: string
  thumbnail: string
}

const AppCard = ({ title, href, thumbnail, children, props }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="rounded-lg flex flex-col" {...props}>
      <img
        className="rounded-lg w-full aspect-video"
        height={300}
        src={thumbnail}
        alt={title}
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="font-sm">{children}</p>
    </a>
  )
}

export default AppCard
