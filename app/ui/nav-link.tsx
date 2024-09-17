import clsx from 'clsx';
import { fonts } from '@/app/ui/fonts';

interface NavAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  innerText: string
  children?: React.ReactNode;
}

export default function NavAnchor({ innerText, children, ...rest }: NavAnchorProps) {
  return (
    <a
      key={innerText}
      href={rest.href}
      className={
        clsx(`${fonts.jetbrainsmono.className} hover:opacity-80 hover:underline`, rest.className)
      }
    >
      <span>
        {children}
        {innerText}
      </span>
    </a>
  );
}
