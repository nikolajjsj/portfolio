interface Props {
  props?: any
}

const Footer = ({...props}: Props) => {
  return (
    <footer {...props} className="fixed bottom-0 w-screen h-[200px] -z-10 flex flex-col items-center justify-end">
      <div className="text-8xl">
        👋
      </div>
      <small className="text-sm opacity-40 p-4">
        &copy; {new Date().getFullYear()} Nikolaj Jensen. All Rights Reserved.
      </small>
    </footer>
  )
}

export default Footer
