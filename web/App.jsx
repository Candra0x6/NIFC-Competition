import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./src/pages/home/layout";
import CulturesPage from "./src/pages/cultures/[culturesId]/layout";
import ArsipPage from "./src/pages/arsip/layout";
import Navbar from "./src/components/elements/Navbar";
import Footer from "./src/components/elements/Footer";
import KlasikPage from "./src/pages/klasik/layout";
import BookPage from "./src/pages/book/[bookId]/layout";
import SongPage from "./src/pages/song/[songId]/layout";

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
