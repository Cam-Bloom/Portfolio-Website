import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
