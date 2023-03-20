import { Link } from 'preact-router'
import './ToolLauncher.css'

export interface ToolLauncherProps {
    text: string
    link: string
}

export default function ToolLauncher(props: ToolLauncherProps) {
    return (
        <>
            <Link href={props.link}>
                <button class="launcher-button">{props.text}</button>
            </Link>
        </>
    )
}