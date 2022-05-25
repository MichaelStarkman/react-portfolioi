import HomeScreen from './Components/HomeScreen/HomeScreen';
import PortNavBar from './Components/PortNavBar/PortNavBar';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import SocialIcons from './Components/SocialIcons/SocialIcons';
import Skills from './Components/Skills/Skills';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <PortNavBar></PortNavBar>
      <HomeScreen></HomeScreen>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <SocialIcons></SocialIcons>
      <Skills></Skills>

    </div>
  );
}

export default App;
