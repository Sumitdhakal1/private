import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import NewAirdrop from "./pages/NewAirdrop";
import SliderHome from "./pages/SliderHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/blog/Blog";
import airdrop from "./pages/Airdrop/airdrop";
import Airdrop from "./pages/Airdrop/airdrop";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
