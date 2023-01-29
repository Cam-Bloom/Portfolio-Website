import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  )
}

export default App
