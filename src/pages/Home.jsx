import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, UserX, Lock, Mail, ArrowRight, CheckCircle2, Copy } from 'lucide-react';

export default function Home({ onCopyEmail }) {
  return (
    <div className="page-wrapper animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <ShieldCheck size={16} />
          <span>Official Trust & Transparency Center</span>
        </div>
        
        <div className="hero-logo-wrap">
          <img 
            src="/app_logo.png" 
            alt="Berry Saloon Icon" 
            className="hero-logo"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        <h1 className="hero-title">
          Berry Saloon Privacy & Data Control
        </h1>
        
        <p className="hero-subtitle">
          Welcome to the official legal portal for Berry Saloon. Review how we protect your personal information or request full account and data deletion at any time.
        </p>
      </section>

      {/* Main Action Grid */}
      <section className="tiles-grid">
        {/* Privacy Policy Tile */}
        <div className="glass-card tile-card">
          <div className="tile-icon-bg gold">
            <ShieldCheck size={28} />
          </div>
          <h2 className="tile-title">Privacy Policy</h2>
          <p className="tile-desc">
            Learn what information Berry Saloon collects, how your salon bookings and location preferences are stored securely, and how we protect your data.
          </p>
          <ul className="tile-features">
            <li><CheckCircle2 size={15} color="#D4AF37" /> Clear data collection practices</li>
            <li><CheckCircle2 size={15} color="#D4AF37" /> Encrypted communication</li>
            <li><CheckCircle2 size={15} color="#D4AF37" /> Your legal rights & options</li>
          </ul>
          <NavLink to="/privacy-policy" className="btn btn-primary tile-btn">
            <span>Read Privacy Policy</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>

        {/* Account Deletion Tile */}
        <div className="glass-card tile-card">
          <div className="tile-icon-bg rose">
            <UserX size={28} />
          </div>
          <h2 className="tile-title">Account Deletion</h2>
          <p className="tile-desc">
            Need to delete your Berry Saloon account? Follow our step-by-step in-app guide or request direct manual account wiping via email.
          </p>
          <ul className="tile-features">
            <li><CheckCircle2 size={15} color="#E29578" /> In-app self deletion options</li>
            <li><CheckCircle2 size={15} color="#E29578" /> Direct mail request to developer</li>
            <li><CheckCircle2 size={15} color="#E29578" /> Permanent data erasure within 30 days</li>
          </ul>
          <NavLink to="/account-deletion" className="btn btn-danger tile-btn">
            <span>Delete Account & Data</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="contact-banner glass-card">
        <div className="contact-banner-content">
          <div className="contact-banner-text">
            <div className="badge">Direct Developer Support</div>
            <h3>Have questions or need assistance?</h3>
            <p>
              Send an email to our official developer address for prompt support with your account or privacy concerns.
            </p>
          </div>

          <div className="contact-actions">
            <a 
              href="mailto:berrybeansdev@gmail.com" 
              className="btn btn-primary"
            >
              <Mail size={16} />
              <span>Email Support</span>
            </a>
            <button 
              onClick={() => onCopyEmail('berrybeansdev@gmail.com')} 
              className="btn btn-secondary"
            >
              <Copy size={16} />
              <span>Copy Email</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          text-align: center;
          padding: 40px 0 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 99px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: var(--accent-gold);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .hero-logo-wrap {
          margin-bottom: 24px;
          position: relative;
        }
        .hero-logo {
          width: 90px;
          height: 90px;
          border-radius: 24px;
          object-fit: cover;
          box-shadow: 0 12px 36px rgba(212, 175, 55, 0.25);
          transition: transform 0.3s ease;
        }
        .hero-logo:hover {
          transform: scale(1.05) rotate(2deg);
        }
        .hero-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 18px;
          background: linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          max-width: 800px;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 660px;
          line-height: 1.6;
        }
        .tiles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 48px;
        }
        .tile-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }
        .tile-icon-bg {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .tile-icon-bg.gold {
          background: rgba(212, 175, 55, 0.12);
          color: var(--accent-gold);
        }
        .tile-icon-bg.rose {
          background: rgba(226, 149, 120, 0.12);
          color: var(--accent-rose);
        }
        .tile-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .tile-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
        }
        .tile-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
          width: 100%;
        }
        .tile-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-main);
        }
        .tile-btn {
          width: 100%;
          justify-content: space-between;
        }
        .contact-banner {
          background: linear-gradient(135deg, rgba(18, 22, 30, 0.9) 0%, rgba(28, 35, 48, 0.7) 100%);
        }
        .contact-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }
        .contact-banner-text h3 {
          font-size: 1.4rem;
          margin: 12px 0 8px;
        }
        .contact-banner-text p {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 540px;
        }
        .contact-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .hero-title { font-size: 2.1rem; }
          .tiles-grid { grid-template-columns: 1fr; }
          .contact-banner-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .contact-actions {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
