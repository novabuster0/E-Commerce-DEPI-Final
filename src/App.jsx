import React from 'react';
import Navbar from './components/Navbar';
import OrderConfirmationPage from './components/OrderConfirmationPage/OrderConfirmationPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <OrderConfirmationPage />
      </div>

      <Footer />
    </div>
  );
}

export default App;