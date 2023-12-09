import Link from 'next/link'
import { useMemo, type ComponentProps } from 'react'

type Props = {
  listStyles: ComponentProps<'nav'>['className']
} & ComponentProps<'ul'>

export const Nav = ({ listStyles, ...props }: Props) => {
  const links = useMemo(
    () => [
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/',
        name: 'Find Hotel',
      },
      {
        path: '/',
        name: 'About us',
      },
      {
        path: '/',
        name: 'Contact us',
      },
    ],
    []
  )

  return (
    <nav {...props}>
      <ul>
        {links.map(({ name, path }, index) => (
          <li key={index} className={listStyles}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
