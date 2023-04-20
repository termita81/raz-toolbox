import Router, { Route } from 'preact-router'
import Match from 'preact-router/match';
import { signal } from '@preact/signals'
import ToolLauncher, { ToolLauncherProps } from '../../components/ToolLauncher/ToolLauncher'
import './Main.css'
import { Fuel } from '../Fuel/Fuel';

const toolLaunchers: ToolLauncherProps[] = [
  { link: '/fuel', text: '⛽ Fuel' },
  { link: '/data', text: 'Data' },
  { link: '/settings', text: '⚙ Settings' },
]

export default function Main(props: unknown) {
  const modalData = signal({
    isVisible: false,
    content: 'nothing, really'
  })
  const handleRoute = async function () {
    console.log('handleRoute', arguments)
  }
  return (
    <>
      <div className="main-container">
        <div className="nav">
          {toolLaunchers.map((launcher, index) => {
            return <ToolLauncher {...launcher} />
          })}
        </div>

        <Match path="/">{function ({ url }: { url: string }) {
          return url.indexOf('fuel') >= 0 ? null : <pre>{url}</pre>
        }}
        </Match>

        <div className="main">
          <Router onChange={handleRoute}>
            <span path="/">Home</span>
            <Route path="/fuel" component={Fuel} />
            <span path="/data"><div style={{ color: '#e30000' }}>Export<br />Import</div></span>
            <span path="/settings"><div style={{ color: '#e30000' }}>Settings<br />but nothing at the moment</div></span>
          </Router>
        </div>
      </div>


      <aside>
          THis is the modal
        </aside>
    </>
  )
}

export function setModalVisibility(to: boolean) {

}