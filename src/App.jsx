import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home.jsx';
import Etudiant from './pages/etudiant.jsx';
import Contact from './pages/contact.jsx';
import DetailEtudiant from './pages/detailetudiant.jsx';
import NotFound from './pages/notfound.jsx';
import { initialEtudiants } from './data/student.js';

function App() {
  const [etudiants, setEtudiants] = useState(initialEtudiants);

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/etudiants"
          element={
            <Etudiant etudiants={etudiants} setEtudiants={setEtudiants} />
          }
        />
        <Route
          path="/etudiants/:id"
          element={<DetailEtudiant etudiants={etudiants} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
