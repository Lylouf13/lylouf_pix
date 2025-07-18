import "./App.css";
import ArtGrid from "./components/artGrid/ArtGrid";
import { useAppSelector } from "./redux/hooks";
import { useState } from "react";
import Viewer from "./components/Viewer/Viewer";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";

function App() {
  const viewerData = useAppSelector((state) => state.viewer);
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <main className="app">
      {viewerData.open && <Viewer />}
      <nav className="nav">
        <div className="navGroup">
        <img
          className="logo"
          src="/assets/others/logo192.png"
          alt="logo"
          onClick={() => setCurrentPage("home")}
        />
        <h2> Lylouf</h2>
        </div>
        <h2
          className={currentPage === "home" ? "subtitle active" : "subtitle"}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </h2>
        <h2
          className={currentPage === "galery" ? "subtitle active" : "subtitle"}
          onClick={() => setCurrentPage("galery")}
        >
          Galery
        </h2>
        <h2
          className={currentPage === "contact" ? "subtitle active" : "subtitle"}
          onClick={() => setCurrentPage("contact")}
        >
          Contact
        </h2>
      </nav>

      {currentPage === "home" && <Home />}
      {currentPage === "galery" && <ArtGrid />}
      {currentPage === "contact" && <Contacts />}
    </main>
  );
}

export default App;
