import { render } from 'preact'
import './App.css'
import { App as CapacitorApp } from '@capacitor/app';
import Main from './pages/Main/Main';
import Router from 'preact-router';

// CapacitorApp.addListener('appStateChange', ({ isActive }) => {
//   alert(`App state changed. Is active? ${isActive}`);
// });

CapacitorApp.addListener('appUrlOpen', data => {
  alert(`App opened with URL: ${JSON.stringify(data)}`);
});

CapacitorApp.addListener('appRestoredResult', data => {
  alert(`Restored state: ${JSON.stringify(data)}`);
});

const checkAppLaunchUrl = async () => {
  const aaa = await CapacitorApp.getLaunchUrl();
  alert(`App opened with URL: ${ aaa?.url}`);
};

CapacitorApp.addListener('backButton', function() {
    alert(JSON.stringify(arguments))
    // TODO add code to ensure this only exits when appropriate
    CapacitorApp.exitApp()
})

render(<Main></Main>, document.getElementById('app') as HTMLElement)

// render(      (<Router>
//   <div path="/">Home</div>
//   <div path="/projects">Projects</div>
//   <div path="/contact">Contact</div>
//   <div path="/fuel">Fuel</div>
// </Router>), document.getElementById('app') as HTMLElement)

