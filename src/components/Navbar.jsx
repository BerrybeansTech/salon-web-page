import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-inner">
        {/* Brand Logo & Name Only */}
        <NavLink to="/privacy-policy" className="brand-link">
          <img 
            src="/app_logo.png" 
            alt="Berry Saloon Icon" 
            className="brand-icon" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="brand-name">Berry Saloon</span>
        </NavLink>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        .navbar-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          object-fit: cover;
          border: 1px solid var(--border-color);
        }
        .brand-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-main);
        }
      `}</style>
    </header>
  );
}
