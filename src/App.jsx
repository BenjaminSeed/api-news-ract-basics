import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import BbcNews from "./components/BbcNews";
import UsNews from "./components/UsNews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/bbc" element={<BbcNews />} />
        <Route path="/UsNews" element={<UsNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
