import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo-row">
          <img 
            src="/app_logo.png" 
            alt="Berry Saloon Icon" 
            className="footer-logo" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="footer-title">Berry Saloon</span>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Berry Saloon. All rights reserved.</p>
      </div>

      <style>{`
        .site-footer {
          background: #FFFFFF;
          border-top: 1px solid var(--border-color);
          padding: 24px 0;
          margin-top: auto;
        }
        .footer-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-logo {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          object-fit: cover;
        }
        .footer-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-main);
        }
        .footer-copy {
          color: var(--text-dim);
          font-size: 0.85rem;
        }
        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
