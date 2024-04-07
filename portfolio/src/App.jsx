import React from 'react'
import styles from './styles/App.module.css'
import{Navbar, Footer} from './components/index.js'

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
