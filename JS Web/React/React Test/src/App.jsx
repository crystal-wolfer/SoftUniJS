import './App.css'
import Customers from './components/Customers.jsx'
import Feature from './components/Feature.jsx'
import Hero from './components/Hero.jsx'
import HowWorks from './components/HowWorks.jsx'
import NavBar from './components/NavBar.jsx'
import Market from './components/Market.jsx'
import Footer from './components/Footer.jsx'
import News from './components/News.jsx'


function App() {

  return (
  <div>
    <NavBar />
     <Hero />
     <Market/>
     <Feature />
     <HowWorks />
     <Customers />
     <News />
     <Footer/>
  </div>
  )
}

export default App
