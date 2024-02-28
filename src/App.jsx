import './App.scss'
import AboutMe from './Views/AboutMe/AboutMe'
import Navbar from './Views/Navbar/Navbar'
import Presentation from './Views/Presentation/Presentation'
import ProjectSec from './Views/ProjectSec/ProjectSec'

function App() {
  return (
    <>
      <Navbar/>
      <Presentation/>
      <ProjectSec />
      <AboutMe />
    </>
  )
}

export default App
