interface Props {
  children: React.ReactNode,
  title?: string,
  props?: any
}

const AppSection = ({ children, title, ...props }: Props) => {
  return (
    <section className="w-3/4 max-w-xl mx-auto pt-10 z-50" {...props}>
      {title &&
        <div className="mb-4 inline-block">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex">
            <div className="h-1 w-0 bg-gray-900 flex-grow"></div>
          </div>
        </div>
      }
      {children}
    </section>
  )
}

export default AppSection
