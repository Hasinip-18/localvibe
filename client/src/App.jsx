import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateEvent from "./pages/CreateEvent";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/create-event" element={<CreateEvent />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
      <footer className="footer">
  <p>© 2026 LocalVibe | Built with ❤️ </p>
</footer>
    </BrowserRouter>
  );
}

export default App;