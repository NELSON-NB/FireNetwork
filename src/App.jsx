import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Certifications from './pages/Certifications'
import Documents from "./pages/Documents";
import DocumentDetails from "./pages/DocumentDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certification" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documents" element={<Documents />} />
    
    
  
          <Route path="/document/:id" element={<DocumentDetails />} />
  
  

        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  )
}

export default App