import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Public/Navbar/Navbar.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar />} />
          <Route path="/example" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

