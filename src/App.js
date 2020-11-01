import React from 'react'
import Header from './pages/header'
import Main from './pages/main'
import Footer from './pages/footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
