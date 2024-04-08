import React from 'react'
import styles from './styles/App.module.css'
import{Navbar, Hero, About, Footer} from './components/index.js'


const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default App
