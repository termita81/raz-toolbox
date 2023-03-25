import Router, { Route } from 'preact-router'
import Match from 'preact-router/match';
import ToolLauncher, { ToolLauncherProps } from '../../components/ToolLauncher/ToolLauncher'
import './Main.css'
import { LocalNotifications, Schedule } from '@capacitor/local-notifications'
import dayjs from 'dayjs';

const toolLaunchers: ToolLauncherProps[] = [
  { link: '/fuel', text: 'Fuel Logs' },
  { link: '/projects', text: 'Projects' },
  { link: '/contact', text: 'Contact' },
]

let id = 1000

export default function Main(props: unknown) {
  const handleRoute = async function () {
    const schedule: Schedule = {
      at: dayjs().add(10, 'second').toDate(),
    }
    LocalNotifications.schedule({
      notifications: [
        { 
          title: 'Notificare',
          body: 'some body',
          id: id++,
          schedule
        }
      ]
    })
  }
  return (
    <>
      {toolLaunchers.map((launcher, index) => {
        return <ToolLauncher {...launcher} />
      })}

      <Match path="/">{function ({url}: {url: string}) {
        return <pre>{url}</pre>
      }}
      </Match>

      <Router onChange={handleRoute}>
        <div path="/">Home</div>
        <div path="/projects">Projects</div>
        <div path="/contact">Contact</div>
        <div path="/fuel">Fuel</div>
      </Router>
    </>
  )
}
