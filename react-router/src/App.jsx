import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import About from './About'
import Contact from './Contact'


function App() {
   return (
      <>
         <NavBar />
         <Router>
            <Routes>
               <Route path='/about' element={<About />}></Route>
               <Route path='/contact' element={<Contact />}></Route>
            </Routes>
         </Router>
      </>
   )
}

export default App
