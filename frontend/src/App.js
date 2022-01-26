import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Booking from "./routes/Booking";
import Shop from "./routes/Shop";
import Order from "./routes/Order";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/shop">
              <Route path=":category" element={<Shop />} />
              <Route path="" element={<Shop />} />
            </Route>
            <Route path="/cart" element={<Order />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
