import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
        <Routes>
            <Route path="/" element={<HomeScreen/>} exact />
            <Route path="/product/:id" element={<ProductScreen/>} />
            <Route path="/cart/:id?" element={<CartScreen/>} />
            <Route path="/shipping" element={<ShippingScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
