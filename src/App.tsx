import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurService from './pages/OurService';
import Guidance from './pages/Guidance';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourservice" element={<OurService />} />
            <Route path="/guidance" element={<Guidance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </main>
        <Footer />
        {/* <a
          href="https://wa.me/9445321824"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
          title="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2.002c-5.52 0-9.998 4.477-9.998 9.998a9.95 9.95 0 001.43 5.167l-1.508 4.908 5.046-1.49a9.962 9.962 0 004.982 1.31c5.52 0 9.998-4.477 9.998-9.998s-4.478-9.998-9.998-9.998zm0 17.998a7.98 7.98 0 01-4.068-1.127l-.291-.176-2.992.883.885-2.921-.189-.3a7.965 7.965 0 01-1.313-4.337c0-4.411 3.588-7.998 7.998-7.998s7.998 3.587 7.998 7.998-3.588 7.998-7.998 7.998zm4.503-5.925c-.246-.123-1.453-.717-1.678-.797s-.389-.123-.555.123c-.16.245-.636.797-.781.963-.144.164-.285.186-.531.063-.246-.123-1.04-.383-1.98-1.223-.732-.653-1.228-1.46-1.372-1.706-.144-.245-.015-.377.108-.5.112-.111.246-.286.369-.43.123-.144.164-.246.246-.409.082-.164.041-.307-.021-.43-.062-.123-.555-1.34-.761-1.837-.2-.48-.403-.414-.555-.42l-.472-.008c-.164 0-.43.061-.655.307s-.86.84-.86 2.048c0 1.208.88 2.377 1.002 2.541.123.164 1.73 2.642 4.194 3.703.587.253 1.045.403 1.402.516.59.187 1.126.16 1.551.096.473-.07 1.453-.594 1.658-1.17.204-.576.204-1.07.143-1.17-.062-.1-.226-.164-.472-.287z" />
          </svg>
        </a> */}
        <a
  href="https://wa.me/9445321824"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group"
  title="Chat on WhatsApp"
>
  {/* Glow Background */}
  <div className="absolute inset-0 rounded-full blur-lg opacity-70 bg-green-500 animate-ping group-hover:animate-none"></div>

  {/* Main Button */}
  <div className="relative bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8" // Increased size from h-6 w-6 to h-8 w-8
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.04 2.002c-5.52 0-9.998 4.477-9.998 9.998a9.95 9.95 0 001.43 5.167l-1.508 4.908 5.046-1.49a9.962 9.962 0 004.982 1.31c5.52 0 9.998-4.477 9.998-9.998s-4.478-9.998-9.998-9.998zm0 17.998a7.98 7.98 0 01-4.068-1.127l-.291-.176-2.992.883.885-2.921-.189-.3a7.965 7.965 0 01-1.313-4.337c0-4.411 3.588-7.998 7.998-7.998s7.998 3.587 7.998 7.998-3.588 7.998-7.998 7.998zm4.503-5.925c-.246-.123-1.453-.717-1.678-.797s-.389-.123-.555.123c-.16.245-.636.797-.781.963-.144.164-.285.186-.531.063-.246-.123-1.04-.383-1.98-1.223-.732-.653-1.228-1.46-1.372-1.706-.144-.245-.015-.377.108-.5.112-.111.246-.286.369-.43.123-.144.164-.246.246-.409.082-.164.041-.307-.021-.43-.062-.123-.555-1.34-.761-1.837-.2-.48-.403-.414-.555-.42l-.472-.008c-.164 0-.43.061-.655.307s-.86.84-.86 2.048c0 1.208.88 2.377 1.002 2.541.123.164 1.73 2.642 4.194 3.703.587.253 1.045.403 1.402.516.59.187 1.126.16 1.551.096.473-.07 1.453-.594 1.658-1.17.204-.576.204-1.07.143-1.17-.062-.1-.226-.164-.472-.287z" />
    </svg>
  </div>
</a>

      </div>
    </Router>
  );
}

export default App;