import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home/Home";
import Page2 from "./pages/Pages2/Page2";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container className="d-flex flex-column min-vh-100">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
