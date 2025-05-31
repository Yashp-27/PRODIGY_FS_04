import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import PrivateChat from './components/PrivateChat';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/private" element={<PrivateChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
