import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Event from "./pages/Event";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import "./scss/App.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/event" element={<Event />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
