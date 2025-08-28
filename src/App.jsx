import { Container } from "react-bootstrap"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./pages/Home/Home"


function App() {


  return (
    <Container>
      <Header/>
      <Home/>
      <Footer/>
    </Container>
  )
}

export default App
