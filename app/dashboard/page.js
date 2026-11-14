
import AppShell from "../../components/AppShell";
import {
  BookOpen, Clock, CheckCircle, CalendarDays,
  ArrowRight, ClipboardList
} from "lucide-react";

const stats = [
  { title: "Total Courses", value: "6", icon: BookOpen, color: "blue", detail: "Currently enrolled" },
  { title: "Pending Assignments", value: "4", icon: Clock, color: "orange", detail: "Needs your attention" },
  { title: "Completed Assignments", value: "12", icon: CheckCircle, color: "green", detail: "Great progress!" },
  { title: "Attendance", value: "87%", icon: CalendarDays, color: "purple", detail: "Overall attendance" },
];

const assignments = [
  { title: "React Project", course: "Full Stack Development", date: "10 Nov 2026", status: "Pending" },
  { title: "Database Design", course: "Database Systems", date: "08 Nov 2026", status: "Submitted" },
  { title: "UI Design Task", course: "Web Technologies", date: "05 Nov 2026", status: "Pending" },
  { title: "Final Project Proposal", course: "Software Engineering", date: "01 Nov 2026", status: "Completed" },
];

const deadlines = [
  { title: "React Project", date: "10 Nov 2026", priority: "High" },
  { title: "Database Assignment", date: "12 Nov 2026", priority: "Medium" },
  { title: "Web Design Portfolio", date: "15 Nov 2026", priority: "Low" },
];

export default function Dashboard() {
  return (
    <AppShell>
      <section className="welcome-banner">
        <div>
          <span className="eyebrow">STUDENT PORTAL</span>
          <h1>Welcome, Ayushi! 👋</h1>
          <p>Let's keep learning and achieve more together!</p>
        </div>
        <div className="welcome-icon">🎓</div>
      </section>

      <div className="section-heading">
        <div><h2>Dashboard Overview</h2><p>Here's your academic progress at a glance.</p></div>
        <span className="date-label">November 2026</span>
      </div>

      <section className="stats-grid">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div className="stat-card" key={item.title}>
              <div className={`stat-icon ${item.color}`}><Icon size={23} /></div>
              <h3>{item.value}</h3>
              <strong>{item.title}</strong>
              <small>{item.detail}</small>
            </div>
          );
        })}
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <div className="panel-title"><ClipboardList /><h2>Recent Assignments</h2></div>
          <a href="/assignments" className="view-link">View All <ArrowRight size={16} /></a>
        </div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Assignment</th><th>Course</th><th>Due Date</th><th>Status</th></tr></thead>
            <tbody>
              {assignments.map((item) => (
                <tr key={item.title}>
                  <td>{item.title}</td><td>{item.course}</td><td>{item.date}</td>
                  <td><span className={`status ${item.status.toLowerCase()}`}>{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <div className="panel-title"><CalendarDays /><h2>Upcoming Deadlines</h2></div>
          <a href="/assignments" className="view-link">View All <ArrowRight size={16} /></a>
        </div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Assignment</th><th>Due Date</th><th>Priority</th></tr></thead>
            <tbody>
              {deadlines.map((item) => (
                <tr key={item.title}>
                  <td>{item.title}</td><td>{item.date}</td>
                  <td><span className={`priority ${item.priority.toLowerCase()}`}>{item.priority}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="footer">© 2026 CampusConnect. All rights reserved.</footer>
    </AppShell>
  );
}
