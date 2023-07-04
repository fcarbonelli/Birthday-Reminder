import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Landing from "./components/Landing" 
import Navbar from "./components/Navbar";
import Register from "./components/Register"
import Login from './components/Login';
import Reminder from './components/Reminder';
import InviteForm from './components/InviteForm';
import Signup from "./components/Signup"


function App() {
  return (
    
    <Router>
        <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={ <Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/birthday" element={<Reminder />} />
        <Route path="/invite/:link" element={ <InviteForm />} />
        <Route path="/signup" element={ <Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
