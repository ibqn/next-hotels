import { FacebookIcon, InstagramIcon, TwitchIcon } from 'lucide-react'
import Link from 'next/link'
import { ComponentProps, useMemo } from 'react'

type Props = {} & ComponentProps<'ul'>

export const Socials = (props: Props) => {
  const socials = useMemo(
    () => [
      {
        href: '#',
        icon: InstagramIcon,
      },
      {
        href: '#',
        icon: FacebookIcon,
      },
      {
        href: '#',
        icon: TwitchIcon,
      },
    ],
    []
  )

  return (
    <ul {...props}>
      {socials.map(({ href, icon: Icon }, index) => (
        <li key={index}>
          <Link href={href}>{<Icon />}</Link>
        </li>
      ))}
    </ul>
  )
}
