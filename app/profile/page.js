
import AppShell from "../../components/AppShell";
import { UserRound, Mail, Phone, MapPin, GraduationCap, CalendarDays } from "lucide-react";

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="section-heading">
        <div>
          <h1>My Profile</h1>
          <p>View your personal and academic information.</p>
        </div>
      </div>

      <section className="welcome-banner">
        <div>
          <span className="eyebrow">STUDENT PROFILE</span>
          <h1>Ayushi Kumari</h1>
          <p>B.Tech Computer Science & Engineering</p>
        </div>
        <div className="welcome-icon"><UserRound size={48} /></div>
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <h2>Personal Information</h2>
        </div>

        <p><UserRound size={17} /> <strong>Name:</strong> Ayushi Kumari</p>
        <p><Mail size={17} /> <strong>Email:</strong> ayushi@example.com</p>
        <p><Phone size={17} /> <strong>Phone:</strong> +91 9876543210</p>
        <p><MapPin size={17} /> <strong>Location:</strong> Haryana, India</p>
      </section>

      <section className="data-panel">
        <div className="panel-heading">
          <h2>Academic Information</h2>
          <GraduationCap />
        </div>

        <p><strong>Program:</strong> B.Tech</p>
        <p><strong>Department:</strong> Computer Science & Engineering</p>
        <p><strong>Academic Year:</strong> 2nd Year</p>
        <p><strong>Roll Number:</strong> GU2024001</p>
        <p><CalendarDays size={17} /> <strong>Expected Graduation:</strong> 2028</p>
      </section>
    </AppShell>
  );
}
