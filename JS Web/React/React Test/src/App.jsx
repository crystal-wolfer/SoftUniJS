import './App.css'
import NavBar from './components/NavBar.jsx'
// import Hero from './components/Home Page/Hero.jsx'
// import Market from './components/Home Page/Market.jsx'
// import Feature from './components/Home Page/Feature.jsx'
// import HowWorks from './components/Home Page/HowWorks.jsx'
import Customers from './components/Home Page/Customers.jsx'
// import News from './components/Home Page/News.jsx'
import Footer from './components/Footer.jsx'
import MarketOverview from './components/Market Overview Page/MarketOverview.jsx'
// import NotFound from './components/Static Pages/404.jsx'


function App() {

  return (
  <div>
    <NavBar />
    <MarketOverview/>
     {/* <Hero /> */}
     {/* <Market/> */}
     {/* <Feature /> */}
     {/* <HowWorks /> */}
     {/* <Customers /> */}
     {/* <News />  */}
     <Footer/>
  </div>
  )
}

export default App
