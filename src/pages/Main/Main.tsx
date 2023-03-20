import Router from 'preact-router'
import ToolLauncher, { ToolLauncherProps } from '../../components/ToolLauncher/ToolLauncher'
import './Main.css'

const toolLaunchers: ToolLauncherProps[] = [
  { link: '/fuel', text: 'Fuel Logs' },
  { link: '/projects', text: 'Projects' },
  { link: '/contact', text: 'Contact' },
]

export default function Main() {

  return (
    <>
      {toolLaunchers.map((launcher, index) => {
        return <ToolLauncher {...launcher} />
      })}
      <Router>
        <div path="/">Home</div>
        <div path="/projects">Projects</div>
        <div path="/contact">Contact</div>
        <div path="/fuel">Fuel</div>
      </Router>
    </>
  )
}
