interface Props {
  props?: any
}

const Footer = ({ ...props }: Props) => {
  return (
    <footer {...props} className="fixed bottom-0 w-screen h-[200px] -z-10 flex flex-col items-center justify-end dark:bg-gray-900">
      <div className="text-8xl">
        👋
      </div>
      <small className="text-sm font-semibold opacity-40 p-4 dark:text-white">
        &copy; {new Date().getFullYear()} Nikolaj Jensen. All Rights Reserved.
      </small>
    </footer>
  )
}

export default Footer
