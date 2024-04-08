import React from 'react'
import styles from './styles/App.module.css'
import{Navbar, Hero, About, Experience, Projects, Contact} from './components/index.js'


const App = () => {
    return (
        <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        </div>
    )
}

export default App
