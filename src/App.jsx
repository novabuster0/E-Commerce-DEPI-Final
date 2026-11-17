import React from 'react';
import Navbar from './components/Navbar';
import AuthPage from './components/loginAndRegister/AuthPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <AuthPage />
      </div>

     
      <Footer />
    </div>
  );
}

export default App;