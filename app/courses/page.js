
import AppShell from "../../components/AppShell";
import Link from "next/link";
import { BookOpen, Clock, GraduationCap, ArrowRight } from "lucide-react";

const courses = [
  { id: 1, title: "Full Stack Development", code: "CS301", faculty: "Dr. Amit Sharma", credits: 4, progress: 75, category: "Development" },
  { id: 2, title: "Database Management Systems", code: "CS302", faculty: "Prof. Neha Gupta", credits: 3, progress: 60, category: "Database" },
  { id: 3, title: "Data Structures & Algorithms", code: "CS303", faculty: "Dr. Rajesh Kumar", credits: 4, progress: 85, category: "Programming" },
  { id: 4, title: "Operating Systems", code: "CS304", faculty: "Prof. Priya Singh", credits: 3, progress: 45, category: "Computer Science" },
  { id: 5, title: "Web Technologies", code: "CS305", faculty: "Dr. Anil Verma", credits: 3, progress: 90, category: "Development" },
  { id: 6, title: "Computer Networks", code: "CS306", faculty: "Prof. Sneha Rao", credits: 4, progress: 55, category: "Networking" },
];

export default function CoursesPage() {
  return (
    <AppShell>
      <div className="section-heading">
        <div>
          <h1>My Courses</h1>
          <p>Explore your enrolled courses and track your progress.</p>
        </div>
        <span className="date-label">{courses.length} Courses</span>
      </div>

      <section className="stats-grid">
        {courses.map((course) => (
          <div className="stat-card" key={course.id}>
            <div className="stat-icon blue"><BookOpen /></div>
            <span className="eyebrow">{course.code}</span>
            <h3>{course.title}</h3>
            <p><GraduationCap size={16} /> {course.faculty}</p>
            <p><Clock size={16} /> {course.credits} Credits</p>

            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${course.progress}%` }} />
            </div>
            <small>{course.progress}% completed</small>

            <Link href={`/courses/${course.id}`} className="view-link">
              View Course <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
