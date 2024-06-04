// src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, New, Sales, Products, Delivery, Forum, About, Text } from './components/AllComponents';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/new" element={<New />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/products" element={<Products />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<About />} />
        <Route path="/text" element={<Text />} />
        <Route path="*" element={<New />} /> {/* Default route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
