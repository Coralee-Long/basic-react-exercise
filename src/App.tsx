
import './App.css'
import { Blog } from "./components/Blog.tsx";
import {Header} from "./components/Header.tsx";
import { Profile } from "./components/Profile.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  )
}

export default App


