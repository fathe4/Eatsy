import Home from "./Pages/Home/Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop/Shop";
import RestaurantDetails from "./Pages/RestaurentDetails/RestaurentDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Shop />} />
          <Route path="/restaurant/:slug" element={<RestaurantDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
