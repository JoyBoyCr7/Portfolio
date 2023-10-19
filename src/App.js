import logo from './logo.svg';
import './App.css';
import 'milligram'
import Header from './components/Header';
import Skills from './components/Skills';
import { Outlet } from 'react-router-dom';
import Projects from './components/projects';
import AboutMe from './components/aboutme';
function App() {
  return (
    <div className="App" style={{}}>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Outlet/>
    </div>
  );
}

export default App;
