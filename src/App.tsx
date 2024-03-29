import { render } from 'preact'
import './App.css'
import { App as CapacitorApp } from '@capacitor/app';
import Main from './pages/Main/Main';


// CapacitorApp.addListener('appStateChange', ({ isActive }) => {
//   alert(`App state changed. Is active? ${isActive}`); // runs even when switching tabs 
// });

CapacitorApp.addListener('appUrlOpen', data => {
  alert(`App opened with URL: ${JSON.stringify(data)}`);
});

CapacitorApp.addListener('appRestoredResult', data => {
  alert(`Restored state: ${JSON.stringify(data)}`);
});

const checkAppLaunchUrl = async () => {
  const aaa = await CapacitorApp.getLaunchUrl();
  alert(`App opened with URL: ${aaa?.url}`);
};

CapacitorApp.addListener('backButton', function () {
  alert(JSON.stringify(arguments))
  // TODO add code to ensure this only exits when appropriate
  CapacitorApp.exitApp()
})

console.log('rendering App')

render(<Main />, document.getElementById('app') as HTMLElement)
