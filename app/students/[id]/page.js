
import AppShell from "../../../components/AppShell";
import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, BookOpen, CalendarCheck } from "lucide-react";

const studentData = {
  1: { name: "Rahul Sharma", roll: "GU2024001", department: "Computer Science", year: "2nd Year", email: "rahul@example.com", phone: "+91 9876543210", city: "Panipat, Haryana", attendance: "88%", courses: ["Full Stack Development", "Database Systems", "Data Structures"], status: "Active" },
  2: { name: "Priya Verma", roll: "GU2024002", department: "Information Technology", year: "3rd Year", email: "priya@example.com", phone: "+91 9876543211", city: "Sonipat, Haryana", attendance: "92%", courses: ["Web Technologies", "Operating Systems"], status: "Active" },
};

export default async function StudentDetails({ params }) {
  const { id } = await params;
  const student = studentData[id] || studentData[1];

  return (
    <AppShell>
      <Link href="/students" className="view-link">← Back to Students</Link>

      <section className="welcome-banner">
        <div>
          <span className="eyebrow">STUDENT PROFILE</span>
          <h1>{student.name}</h1>
          <p>{student.roll} · {student.department}</p>
        </div>
        <div className="welcome-icon"><GraduationCap size={48} /></div>
      </section>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue"><CalendarCheck /></div>
          <h3>{student.attendance}</h3>
          <strong>Attendance</strong>
        </div>
        <div className="stat-card">
          <div className="stat-icon green"><BookOpen /></div>
          <h3>{student.courses.length}</h3>
          <strong>Enrolled Courses</strong>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple"><GraduationCap /></div>
          <h3>{student.year}</h3>
          <strong>Academic Year</strong>
        </div>
      </div>

      <section className="data-panel">
        <div className="panel-heading"><h2>Personal Information</h2></div>
        <p><strong><Mail size={16} /> Email:</strong> {student.email}</p>
        <p><strong><Phone size={16} /> Phone:</strong> {student.phone}</p>
        <p><strong><MapPin size={16} /> Location:</strong> {student.city}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Status:</strong> {student.status}</p>
      </section>

      <section className="data-panel">
        <div className="panel-heading"><h2>Enrolled Courses</h2></div>
        {student.courses.map((course) => (
          <p key={course}>📘 {course}</p>
        ))}
      </section>
    </AppShell>
  );
}
