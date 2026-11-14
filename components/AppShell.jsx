
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  GraduationCap, LayoutDashboard, BookOpen, Users,
  ClipboardList, UserRound, Settings, Search, Bell, Menu, X, LogOut
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Courses", path: "/courses", icon: BookOpen },
  { name: "Students", path: "/students", icon: Users },
  { name: "Assignments", path: "/assignments", icon: ClipboardList },
  { name: "Profile", path: "/profile", icon: UserRound },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="app-layout">
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <GraduationCap size={34} />
          <span>Campus<span className="brand-blue">Connect</span></span>
          <button className="close-menu" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="side-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path ||
              (item.path !== "/dashboard" && pathname.startsWith(item.path + "/"));

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`nav-link ${active ? "active" : ""}`}
              >
                <Icon size={19} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="student-mini">
            <div className="avatar">AK</div>
            <div>
              <strong>Ayushi Kumari</strong>
              <small>Student</small>
            </div>
          </div>
          <Link href="/login" className="logout-link">
            <LogOut size={18} /> Logout
          </Link>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="menu-btn" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search anything..." />
          </div>
          <div className="top-actions">
            <button className="notification"><Bell size={20} /><span /></button>
            <div className="top-user">
              <div className="avatar">AK</div>
              <div><strong>Ayushi</strong><small>Student</small></div>
            </div>
          </div>
        </header>

        <div className="page-content">{children}</div>
      </main>

      {open && <div className="mobile-overlay" onClick={() => setOpen(false)} />}
    </div>
  );
}
