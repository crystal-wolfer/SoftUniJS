import './App.css'
import Customers from './components/Customers.jsx'
import Feature from './components/Feature.jsx'
import Hero from './components/Hero.jsx'
import HowWorks from './components/HowWorks.jsx'
import NavBar from './components/NavBar.jsx'
import Market from './components/Market.jsx'
import Market2 from './components/Market2.jsx'


function App() {

  return (
  <div>
    <NavBar />
     <Hero />
     <Market/>
     <Market2/>
     <Feature />
     <HowWorks />
     <Customers />
  </div>
  )
}

export default App
