import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home Page/Home.jsx'
import Footer from './components/Footer.jsx'
import MarketOverview from './components/Market Overview Page/MarketOverview.jsx'
import NotFound from './components/Static Pages/404.jsx'


function App() {

  return (
  <div>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/market-overview' element={<MarketOverview/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
     <Footer/>
  </div>
  )
}

export default App
