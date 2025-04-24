import './App.css'
import FirstCards from './component/FirstCards'
import  NavbarMusic  from './component/NavbarMusic'
import Cards from './component/Cards'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'




function App() {
  

  return (
    
<BrowserRouter>

  <NavbarMusic/>
<Container fluid={true}>
<Row>
  <Col className='bg-black'>
 
<FirstCards  />
<Cards />

</Col>
</Row>
</Container>
</BrowserRouter>
   
  )
}

export default App
