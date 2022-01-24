import Link from 'next/link'

interface Props {
  props?: any
}

const Navbar = ({ ...props }: Props) => {
  return (
    <nav {...props} className="sticky top-0 left-0 w-screen h-12 bg-white z-50 shadow mb-2">
      <div className="flex h-12 max-w-xl mx-auto items-center justify-between">
        <Link href="/"><a className="text-2xl font-semibold tracking-wider">Nikolaj Jensen.</a></Link>

        <div>
          <Link href="/works"><a className="text-xl font-semibold ml-2">Works</a></Link>
          <Link href="/posts"><a className="text-xl font-semibold ml-2">Posts</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
