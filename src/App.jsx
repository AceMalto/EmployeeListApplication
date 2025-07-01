import { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Settings from './pages/setting';
import Admin from './pages/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/employeeForm';
import Customers from './pages/customers';
import Helps from './pages/employeeDetail';
import Manages from './pages/manages';
import Logout from './pages/logout';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
        <main
          className={
            'pt-20 ' +
            (isOpen ? 'flex-1 transition-all duration-300 ml-[30px] pt-16' : 'flex-1 transition-all duration-300 ml-[30px] pt-16')
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/helps" element={<Helps />} />
            <Route path="/manages" element={<Manages />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
