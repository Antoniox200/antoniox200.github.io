import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import useIntersectionObserver from './hooks/useIntersectionObserver'
import './App.css'

function App() {
  useIntersectionObserver()

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <footer>
        © 2024 Antonio Iadicicco. All rights reserved.
      </footer>
    </div>
  )
}

export default App
