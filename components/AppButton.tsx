import Link from "next/link";
import { Url } from "url";

interface Props {
  children?: React.ReactNode,
  props?: any,
  href?: Url,
}

const AppButton = ({ children, props, href }: Props) => {
  return (
    <button className="flex rounded bg-transparent hover:bg-teal-200" {...props}>
      {!href ? children : <Link href={href}>{children}</Link>}
    </button>
  )
}

export default AppButton;
