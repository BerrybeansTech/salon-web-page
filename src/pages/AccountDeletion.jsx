import React, { useState } from 'react';
import { UserX, Mail, CheckCircle2, Copy, Clock, Send, ExternalLink } from 'lucide-react';

export default function AccountDeletion({ onCopyEmail }) {
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [reason, setReason] = useState('');

  const developerEmail = "berrybeansdev@gmail.com";

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Account Deletion Request - Berry Saloon");
    const body = encodeURIComponent(
      `Hello Berry Saloon Support Team,\n\nI would like to request the deletion of my Berry Saloon account and all associated personal data.\n\nAccount Email: ${userEmail || '[Insert your registered email]'}\nReason (Optional): ${reason || 'No longer needed'}\n\nPlease confirm once my account data has been permanently deleted.\n\nThank you.`
    );
    window.location.href = `mailto:${developerEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header Banner */}
      <div className="deletion-header light-card">
        <div className="deletion-header-content">
          <img 
            src="/app_logo.png" 
            alt="Berry Saloon Icon" 
            className="deletion-app-icon"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div>
            <div className="badge">Account & Data Management</div>
            <h1 className="deletion-title">Berry Saloon Account Deletion</h1>
            <p className="deletion-subtitle">
              Request permanent deletion of your Berry Saloon account and associated personal data. You can delete your account inside the mobile app or submit an email request.
            </p>
          </div>
        </div>
      </div>

      {/* Deletion Methods Grid */}
      <div className="methods-grid">
        {/* Method 1: In-App Deletion */}
        <div className="light-card method-card">
          <span className="method-label">Method 1 (In-App)</span>
          <h2 className="method-title">Delete Account via Mobile App</h2>
          <p className="method-desc">
            Perform self-service deletion directly within the Berry Saloon application:
          </p>

          <ol className="steps-list">
            <li className="step-item">
              <span className="step-num">1</span>
              <div>
                <strong>Open Berry Saloon App</strong>
                <p>Launch the app on your mobile device and log in.</p>
              </div>
            </li>
            <li className="step-item">
              <span className="step-num">2</span>
              <div>
                <strong>Navigate to Profile</strong>
                <p>Tap your <strong>Profile</strong> tab in the bottom bar, then open <strong>Settings</strong>.</p>
              </div>
            </li>
            <li className="step-item">
              <span className="step-num">3</span>
              <div>
                <strong>Select Delete Account</strong>
                <p>Tap <strong>Account Settings</strong> and choose <strong>Delete Account</strong>.</p>
              </div>
            </li>
            <li className="step-item">
              <span className="step-num">4</span>
              <div>
                <strong>Confirm Action</strong>
                <p>Review the warning prompt and confirm permanent deletion.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Method 2: Email Deletion Request */}
        <div className="light-card method-card">
          <span className="method-label">Method 2 (Email Request)</span>
          <h2 className="method-title">Submit Manual Email Request</h2>
          <p className="method-desc">
            Send an account deletion request directly to our developer team:
          </p>

          <div className="email-box">
            <div className="email-box-header">
              <Mail size={16} color="var(--text-muted)" />
              <span>Official Developer Contact:</span>
            </div>
            <div className="email-address-row">
              <span className="email-address">{developerEmail}</span>
              <button 
                onClick={() => onCopyEmail(developerEmail)} 
                className="btn btn-outline copy-sm-btn"
              >
                <Copy size={13} />
                <span>Copy</span>
              </button>
            </div>
          </div>

          <div className="method-actions">
            <button 
              onClick={() => setShowModal(true)} 
              className="btn btn-primary method-action-btn"
            >
              <Send size={15} />
              <span>Generate Email Request</span>
            </button>
            <a 
              href={`mailto:${developerEmail}?subject=Account%20Deletion%20Request%20-%20Berry%20Saloon`}
              className="btn btn-outline method-action-btn"
            >
              <ExternalLink size={15} />
              <span>Open Email Client</span>
            </a>
          </div>
        </div>
      </div>

      {/* Info Cards: Scope & Retention */}
      <div className="info-cards-grid">
        <div className="light-card info-card">
          <h3 className="info-card-title">
            <CheckCircle2 size={18} color="var(--text-main)" />
            <span>Data Erased Upon Deletion</span>
          </h3>
          <ul className="info-list">
            <li>User profile details (Name, Email, Phone Number, Password hash)</li>
            <li>Stored salon booking history and appointment records</li>
            <li>Saved salon preferences, favorite stylists, and service reviews</li>
            <li>Push notification tokens and device links</li>
          </ul>
        </div>

        <div className="light-card info-card">
          <h3 className="info-card-title">
            <Clock size={18} color="var(--text-main)" />
            <span>Processing & Retention Period</span>
          </h3>
          <ul className="info-list">
            <li><strong>Immediate Access Removal:</strong> Account sign-in is disabled right after submission.</li>
            <li><strong>30-Day Permanent Purge:</strong> All personal data is permanently wiped within 30 days.</li>
            <li><strong>Legal Exception:</strong> Financial invoices may be retained temporarily for tax compliance.</li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="light-card modal-box">
            <h3 className="modal-title">Deletion Request Helper</h3>
            <p className="modal-desc">
              Enter your account email to compose a deletion request to <strong>{developerEmail}</strong>.
            </p>

            <div className="form-group">
              <label className="form-label">Account Email *</label>
              <input 
                type="email" 
                placeholder="your.email@example.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Reason (Optional)</label>
              <textarea 
                placeholder="Optional feedback..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="form-textarea"
                rows={3}
              />
            </div>

            <div className="modal-actions">
              <button onClick={() => setShowModal(false)} className="btn btn-outline">
                Cancel
              </button>
              <button onClick={handleSendEmail} className="btn btn-primary">
                <Send size={15} />
                <span>Send Request</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .deletion-header {
          margin-bottom: 28px;
        }
        .deletion-header-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .deletion-app-icon {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          object-fit: cover;
          border: 1px solid var(--border-color);
        }
        .deletion-title {
          font-size: 1.8rem;
          margin: 4px 0 6px;
        }
        .deletion-subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.55;
        }
        .methods-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 28px;
        }
        .method-card {
          display: flex;
          flex-direction: column;
        }
        .method-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold-dark);
          margin-bottom: 8px;
        }
        .method-title {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }
        .method-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin-bottom: 18px;
          line-height: 1.5;
        }
        .steps-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .step-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-subtle);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-weight: 700;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .step-item strong {
          color: var(--text-main);
          font-size: 0.88rem;
          display: block;
        }
        .step-item p {
          color: var(--text-muted);
          font-size: 0.82rem;
          line-height: 1.4;
        }
        .email-box {
          padding: 16px;
          background: var(--bg-subtle);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          margin-bottom: 20px;
        }
        .email-box-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 6px;
        }
        .email-address-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .email-address {
          font-family: monospace;
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 600;
        }
        .copy-sm-btn {
          padding: 4px 10px;
          font-size: 0.75rem;
        }
        .method-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }
        .method-action-btn {
          width: 100%;
        }
        .info-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .info-card-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.05rem;
          margin-bottom: 14px;
        }
        .info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .info-list li {
          color: var(--text-muted);
          font-size: 0.86rem;
          line-height: 1.5;
          position: relative;
          padding-left: 16px;
        }
        .info-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--text-dim);
        }
        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-box {
          max-width: 460px;
          width: 100%;
          padding: 28px;
          background: #FFFFFF;
        }
        .modal-title {
          font-size: 1.25rem;
          margin-bottom: 6px;
        }
        .modal-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 14px;
        }
        .form-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 4px;
        }
        .form-input, .form-textarea {
          width: 100%;
          padding: 10px;
          background: var(--bg-subtle);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 0.9rem;
          outline: none;
        }
        .form-input:focus, .form-textarea:focus {
          border-color: var(--text-main);
          background: #FFFFFF;
        }
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 20px;
        }
        @media (max-width: 820px) {
          .deletion-header-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .methods-grid, .info-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
