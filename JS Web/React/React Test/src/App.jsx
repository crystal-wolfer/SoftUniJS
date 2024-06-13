import './App.css'
import Customers from './components/Home Page/Customers.jsx'
import Feature from './components/Home Page/Feature.jsx'
import Hero from './components/Home Page/Hero.jsx'
import HowWorks from './components/Home Page/HowWorks.jsx'
import NavBar from './components/NavBar.jsx'
import Market from './components/Home Page/Market.jsx'
import Footer from './components/Footer.jsx'
import News from './components/Home Page/News.jsx'


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
