
import AppShell from "../../../components/AppShell";
import Link from "next/link";
import { BookOpen, GraduationCap, Clock, FileText, CalendarDays } from "lucide-react";

const courseData = {
  1: {
    title: "Full Stack Development",
    code: "CS301",
    faculty: "Dr. Amit Sharma",
    credits: 4,
    progress: 75,
    description: "Learn modern frontend and backend development using React, Next.js, Node.js and databases.",
    topics: ["HTML, CSS and JavaScript", "React and Next.js", "Node.js and Express", "Database Integration"],
  },
  2: {
    title: "Database Management Systems",
    code: "CS302",
    faculty: "Prof. Neha Gupta",
    credits: 3,
    progress: 60,
    description: "Understand database concepts, SQL queries, normalization and database design.",
    topics: ["Database Fundamentals", "SQL Queries", "Normalization", "Transactions"],
  },
};

export default async function CourseDetails({ params }) {
  const { id } = await params;
  const course = courseData[id] || courseData[1];

  return (
    <AppShell>
      <Link href="/courses" className="view-link">← Back to Courses</Link>

      <section className="welcome-banner">
        <div>
          <span className="eyebrow">COURSE DETAILS</span>
          <h1>{course.title}</h1>
          <p>{course.code} · {course.credits} Credits</p>
        </div>
        <div className="welcome-icon"><BookOpen size={48} /></div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue"><GraduationCap /></div>
          <h3>{course.faculty}</h3>
          <strong>Faculty</strong>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange"><Clock /></div>
          <h3>{course.credits}</h3>
          <strong>Course Credits</strong>
        </div>

        <div className="stat-card">
          <div className="stat-icon green"><BookOpen /></div>
          <h3>{course.progress}%</h3>
          <strong>Course Progress</strong>
        </div>
      </section>

      <section className="data-panel">
        <h2>About This Course</h2>
        <p>{course.description}</p>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${course.progress}%` }} />
        </div>
        <small>{course.progress}% completed</small>
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <h2>Course Syllabus</h2>
          <FileText />
        </div>

        {course.topics.map((topic, index) => (
          <p key={topic}>
            <strong>Module {index + 1}:</strong> {topic}
          </p>
        ))}
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <h2>Course Information</h2>
          <CalendarDays />
        </div>
        <p><strong>Course Code:</strong> {course.code}</p>
        <p><strong>Faculty:</strong> {course.faculty}</p>
        <p><strong>Credits:</strong> {course.credits}</p>
        <p><strong>Status:</strong> Enrolled</p>
      </section>
    </AppShell>
  );
}
