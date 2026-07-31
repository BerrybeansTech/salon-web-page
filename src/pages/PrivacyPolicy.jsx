import React from 'react';
import { Calendar } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "July 31, 2026";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `Welcome to Berry Saloon ("we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile application ("Berry Saloon") and associated salon booking services.

By installing, accessing, or using Berry Saloon, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms set forth herein, please discontinue use of the application immediately.`
    },
    {
      id: "data-collection",
      title: "2. Information We Collect",
      content: `We collect personal information necessary to deliver and improve our salon booking services:

• Account & Identity Data: Full name, email address, phone number, and optional profile avatar created during account registration.
• Salon Booking Information: Service selections, appointment dates, times, preferred salons, chosen stylists, and appointment history.
• Location Data: With your explicit device permission, we access location details to display nearby salons, map routes, and calculate distances.
• Technical & Device Metadata: Mobile device model, OS version, unique device identifiers, IP address, app performance metrics, and crash logs.`
    },
    {
      id: "data-usage",
      title: "3. How We Use Your Information",
      content: `Berry Saloon processes your data strictly for legitimate operational purposes:

• Processing and managing your salon appointments and reservations.
• Sending automated appointment confirmations, schedule updates, and service notifications.
• Facilitating customer support and addressing inquiries sent to berrybeansdev@gmail.com.
• Enhancing application features, interface usability, and system performance.
• Maintaining platform security, preventing fraudulent activity, and complying with legal obligations.`
    },
    {
      id: "data-sharing",
      title: "4. Information Sharing & Third Parties",
      content: `We prioritize user confidentiality. We do NOT sell, rent, or trade your personal data to third parties or advertising brokers.

Data is shared strictly under the following limited conditions:
• Partner Salons: Essential appointment details (your name, contact phone number, and service booked) are shared with the destination salon to fulfill your service request.
• Infrastructure Providers: Trusted third-party vendors (cloud storage, SMS gateway, push notifications) who operate under strict confidentiality agreements.
• Legal Mandates: Where required by applicable law, court order, or governmental authority to protect legal rights and user safety.`
    },
    {
      id: "data-security",
      title: "5. Data Security & Storage",
      content: `We implement administrative, technical, and physical security protocols to safeguard your personal data. All network traffic between the Berry Saloon mobile application and our backend servers is encrypted using standard Transport Layer Security (TLS/HTTPS).

While we implement industry-standard protections, no internet-based transmission or electronic database can be guaranteed 100% secure.`
    },
    {
      id: "data-retention",
      title: "6. Data Retention & Deletion",
      content: `Personal information is retained only as long as your account remains active or as required to fulfill the operational purposes described in this policy.

You may request account and data erasure at any time via email to berrybeansdev@gmail.com. Upon request, your account data will be permanently deleted from our primary databases within 30 calendar days.`
    },
    {
      id: "user-rights",
      title: "7. Your Rights & Choices",
      content: `As a Berry Saloon user, you hold the following data rights:

• Access & Export: Request a copy of your personal data maintained by Berry Saloon.
• Rectification: Update or correct inaccurate account information directly in the app.
• Erasure: Request full deletion of your profile and booking history by contacting berrybeansdev@gmail.com.
• Permission Revocation: Manage or revoke location and notification permissions in your mobile device settings.`
    },
    {
      id: "children-privacy",
      title: "8. Children's Privacy",
      content: `Berry Saloon does not knowingly collect or solicit personal information from individuals under the age of 13. If we discover that a child under 13 has registered an account, we will take immediate measures to remove the information from our records.`
    },
    {
      id: "policy-changes",
      title: "9. Policy Modifications",
      content: `We may revise this Privacy Policy from time to time. Any changes will be published on this page with an updated "Last Updated" date. Continued use of the Berry Saloon app following posted modifications constitutes acceptance of the revised terms.`
    },
    {
      id: "contact-us",
      title: "10. Contact Us",
      content: `For any questions, concerns, or legal inquiries regarding this Privacy Policy, please contact our privacy compliance team:

App Name: Berry Saloon
Support Email: berrybeansdev@gmail.com`
    }
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header Banner */}
      <div className="policy-header light-card">
        <div className="policy-header-left">
          <img 
            src="/app_logo.png" 
            alt="Berry Saloon Icon" 
            className="policy-app-icon"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div>
            <div className="badge">Official Policy</div>
            <h1 className="policy-main-title">Berry Saloon Privacy Policy</h1>
            <p className="policy-meta">
              <Calendar size={14} />
              <span>Last Updated: {lastUpdated}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Single Column */}
      <main className="policy-content">
        {sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="light-card policy-section">
            <h2 className="section-title">{sec.title}</h2>
            <div className="section-body">
              {sec.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </main>

      <style>{`
        .policy-header {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }
        .policy-header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .policy-app-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          object-fit: cover;
          border: 1px solid var(--border-color);
        }
        .policy-main-title {
          font-size: 1.8rem;
          margin: 4px 0 2px;
        }
        .policy-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        .policy-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .policy-section {
          padding: 28px;
        }
        .section-title {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--text-main);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 8px;
        }
        .section-body {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.7;
          white-space: pre-line;
        }
        @media (max-width: 600px) {
          .policy-section {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
