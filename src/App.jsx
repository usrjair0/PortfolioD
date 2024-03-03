import './App.scss'
import AboutMe from './Views/AboutMe/AboutMe'
import Footer from './Views/Footer/Footer'
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
      <Footer />
    </>
  )
}

export default App
