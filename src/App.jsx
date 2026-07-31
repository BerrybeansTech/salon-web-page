import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccountDeletion from './pages/AccountDeletion';
import { Check } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const handleCopyEmail = (email = 'berrybeansdev@gmail.com') => {
    navigator.clipboard.writeText(email);
    setToastMessage(`Copied to clipboard: ${email}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<PrivacyPolicy onCopyEmail={handleCopyEmail} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy onCopyEmail={handleCopyEmail} />} />
            <Route path="/account-deletion" element={<AccountDeletion onCopyEmail={handleCopyEmail} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Toast Notification */}
        {toastMessage && (
          <div className="toast-container">
            <div className="toast">
              <Check size={16} />
              <span>{toastMessage}</span>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}
