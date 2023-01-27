
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'



function App() {
  return (
   <Router>

      <div>
        <Link to="/"> Home</Link>
        <Link to="/contact"> Contato</Link>
        <Link to="/company"> Company</Link>
        <Link to="/new-project"> New Project</Link>
       
      </div>
     
      <Container customClass="min_height">
        <Routes>
          
              <Route path='/' element= {<Home/>}> </Route>
              <Route path='/contact' element= {<Contact/>} />
              <Route path='/company' element= {<Company/>}> </Route>
              <Route path='/new-project' element= {<NewProject/>}> </Route>
              
        </Routes>
       
       </Container>
       <p> Footer</p>    
     
   </Router>
    
  )
}

export default App;
