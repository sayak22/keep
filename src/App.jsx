import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Add from "./pages/Add";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Edit from "./pages/Edit";
import { http } from "./utils/http";


const App = () => {
  const params = useParams();
  useEffect(() => {
    getNotes();
  }, []);
  const [allNotes, setAllNotes] = useState([]);
  async function getNotes() {
    await http
      .get("/notes")
      .then((res) => {
        setAllNotes([...res.data]);
      })
      .catch((err) => console.log(err));
  }
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<Add/>} />
          <Route
            path="/edit/:id"
            element={
              <Edit
                id={params.id}
                noteToEdit={allNotes[params.id]}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
