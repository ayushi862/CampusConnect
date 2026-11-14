import Link from "next/link";
import { GraduationCap, BookOpen, Users, ClipboardList, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="home-page">
      <nav className="home-nav">
        <Link href="/" className="home-logo">
          <GraduationCap size={28} />
          CampusConnect
        </Link>

        <div className="home-nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <Link href="/login" className="home-login">Login</Link>
        </div>
      </nav>

      <section className="home-hero">
        <div>
          <span className="home-label">STUDENT MANAGEMENT PORTAL</span>
          <h1>Your campus life,<br />all in one place.</h1>
          <p>
            Manage your courses, assignments and academic activities
            through one simple and organized platform.
          </p>

          <Link href="/login" className="home-button">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>

        <div className="home-illustration">
          <GraduationCap size={100} strokeWidth={1.2} />
          <h2>Learn. Manage. Grow.</h2>
          <p>Your academic journey starts here.</p>
        </div>
      </section>

      <section className="home-features" id="features">
        <h2>What you can do</h2>
        <p className="home-subtitle">Everything you need to manage your studies.</p>

        <div className="home-feature-grid">
          <div className="home-feature">
            <BookOpen size={28} />
            <h3>Courses</h3>
            <p>View your courses and learning progress.</p>
          </div>

          <div className="home-feature">
            <ClipboardList size={28} />
            <h3>Assignments</h3>
            <p>Manage tasks and keep track of deadlines.</p>
          </div>

          <div className="home-feature">
            <Users size={28} />
            <h3>Students</h3>
            <p>Explore student details and profiles.</p>
          </div>
        </div>
      </section>

      <section className="home-about" id="about">
        <h2>Made to make student life easier.</h2>
        <p>
          CampusConnect brings important academic information
          together in one convenient place.
        </p>
        <Link href="/login">Go to Portal <ArrowRight size={17} /></Link>
      </section>

      <footer className="home-footer">
        © 2026 CampusConnect | Student Management Portal
      </footer>
    </main>
  );
}