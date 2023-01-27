
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'

import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Ptojects'



function App() {
  return (
   <Router>

      <Navbar/>
     
      <Container customClass="min_height">
        <Routes>
          
              <Route path='/' element= {<Home/>}> </Route>
              <Route path='/contact' element= {<Contact/>} />
              <Route path='/projects' element= {<Projects/>}> </Route>
              <Route path='/new-project' element= {<NewProject/>}> </Route>
              
        </Routes>      
       
       </Container>
       <Footer/>
     
   </Router>
    
  )
}

export default App;
