import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home/layout";
import CulturesPage from "./pages/cultures/[culturesId]/layout";
import ArsipPage from "./pages/arsip/layout";
import Navbar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";
import KlasikPage from "./pages/klasik/layout";
import BookPage from "./pages/book/[bookId]/layout";
import SongPage from "./pages/song/[songId]/layout";

function App() {
  return (
    <BrowserRouter basename="/" className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/arsip" element={<ArsipPage />} />
        <Route path="/book/:bookId" element={<BookPage />} />
        <Route path="/culture/:culturesId" element={<CulturesPage />} />
        <Route path="/klasik" element={<KlasikPage />} />
        <Route path="/song/:songId" element={<SongPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
