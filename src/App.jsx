import { BrowserRouter } from "react-router-dom";
import { About, Contact,  Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <div className="main relative z-0 bg-primary">
        <div className="bg-hero-pattern  bg-cover bg-no-repeat bg-center">
          <Navbar />
          
          <Hero/>
        </div>
        <About />
        
        <Tech />
        <Works />
        
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
