import { Link } from 'preact-router'
import './ToolLauncher.scss'

export interface ToolLauncherProps {
  text: string
  link: string
}

export default function ToolLauncher(props: ToolLauncherProps) {
  return <Link href={props.link} class="launcher-button">
    <button class="launcher-button">
      {props.text}
    </button>
  </Link>
}