import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import NotFound from "./components/not-found/NotFound";
import { useState } from "react";
import Video from "./pages/Video";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Router>
        <Header setMenu={setMenu} />
        <div className="main__content">
          <Routes>
            <Route path="/" element={<Home setMenu={setMenu} menu={menu} />} />
            <Route
              path="/video/:categoryID/:videoID/:channelID"
              element={<Video menu={menu} setMenu={setMenu} />}
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
