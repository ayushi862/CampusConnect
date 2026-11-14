
"use client";

import AppShell from "../../components/AppShell";
import { useState } from "react";
import { ClipboardList, CalendarDays, CheckCircle, Clock } from "lucide-react";

const initialAssignments = [
  { id: 1, title: "React Project", course: "Full Stack Development", due: "18 Nov 2026", status: "Pending" },
  { id: 2, title: "Database Design", course: "Database Systems", due: "20 Nov 2026", status: "Submitted" },
  { id: 3, title: "UI Design Task", course: "Web Technologies", due: "22 Nov 2026", status: "Pending" },
  { id: 4, title: "Java Programming", course: "Programming Fundamentals", due: "25 Nov 2026", status: "Completed" },
  { id: 5, title: "Network Security Report", course: "Computer Networks", due: "28 Nov 2026", status: "Pending" },
];

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState(initialAssignments);

  function submitAssignment(id) {
    setAssignments((current) =>
      current.map((item) =>
        item.id === id && item.status === "Pending"
          ? { ...item, status: "Submitted" }
          : item
      )
    );
  }

  const pending = assignments.filter((a) => a.status === "Pending").length;
  const submitted = assignments.filter((a) => a.status === "Submitted").length;
  const completed = assignments.filter((a) => a.status === "Completed").length;

  return (
    <AppShell>
      <div className="section-heading">
        <div>
          <h1>Assignments</h1>
          <p>Track your tasks, deadlines and submissions.</p>
        </div>
        <span className="date-label">{assignments.length} Assignments</span>
      </div>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon orange"><Clock /></div>
          <h3>{pending}</h3>
          <strong>Pending</strong>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><ClipboardList /></div>
          <h3>{submitted}</h3>
          <strong>Submitted</strong>
        </div>
        <div className="stat-card">
          <div className="stat-icon green"><CheckCircle /></div>
          <h3>{completed}</h3>
          <strong>Completed</strong>
        </div>
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <h2>All Assignments</h2>
          <CalendarDays />
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Course</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.title}</strong></td>
                  <td>{item.course}</td>
                  <td>{item.due}</td>
                  <td>
                    <span className={`status ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    {item.status === "Pending" ? (
                      <button
                        className="submit-btn"
                        onClick={() => submitAssignment(item.id)}
                      >
                        Submit
                      </button>
                    ) : (
                      <span className="view-link">✓ Done</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
