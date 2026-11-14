
"use client";

import AppShell from "../../components/AppShell";
import { useState } from "react";
import { Settings, Bell, Lock, Moon, Globe, UserRound } from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <AppShell>
      <div className="section-heading">
        <div>
          <h1>Settings</h1>
          <p>Manage your account preferences.</p>
        </div>
      </div>

      <section className="data-panel">
        <div className="panel-heading">
          <h2><UserRound size={20} /> Account Settings</h2>
        </div>
        <p>Account Name: Ayushi Kumari</p>
        <p>Email: ayushi@example.com</p>
        <p>Account Type: Student</p>
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <h2><Bell size={20} /> Notifications</h2>
        </div>

        <label className="setting-row">
          <span>Push Notifications</span>
          <input type="checkbox" checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)} />
        </label>

        <label className="setting-row">
          <span>Email Alerts</span>
          <input type="checkbox" checked={emailAlerts}
            onChange={(e) => setEmailAlerts(e.target.checked)} />
        </label>
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <h2><Globe size={20} /> Preferences</h2>
        </div>

        <label className="setting-row">
          Language
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </label>

        <label className="setting-row">
          <span><Moon size={17} /> Dark Mode</span>
          <input type="checkbox" checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)} />
        </label>
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <h2><Lock size={20} /> Security</h2>
        </div>
        <p>Password: •••••••••</p>
        <button className="submit-btn" onClick={() => alert("Demo: Password change option")}>
          Change Password
        </button>
      </section>
    </AppShell>
  );
}
