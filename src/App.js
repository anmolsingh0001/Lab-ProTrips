import Navbar from "./coponents/Navbar"
import Contact from "./coponents/contact"
import Home from "./coponents/Home"
import About from "./coponents/About"
import Forms from "./coponents/Forms"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Contact/>} />
          <Route path="/2" element={<Forms />} />
        </Routes>
      </div>
    </>
  )
}

export default App
