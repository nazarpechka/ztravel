import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Booking from "./routes/Booking";

const App = () => {
  fetch("/users")
    .then((response) => response.text())
    .then((data) => console.log({ data }));
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;
