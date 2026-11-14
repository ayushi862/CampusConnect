
import AppShell from "../../components/AppShell";
import Link from "next/link";
import { Search, Users, Eye } from "lucide-react";

const students = [
  { id: 1, name: "Rahul Sharma", roll: "GU2024001", department: "Computer Science", year: "2nd Year", email: "rahul@example.com" },
  { id: 2, name: "Priya Verma", roll: "GU2024002", department: "Information Technology", year: "3rd Year", email: "priya@example.com" },
  { id: 3, name: "Aman Kumar", roll: "GU2024003", department: "Computer Science", year: "2nd Year", email: "aman@example.com" },
  { id: 4, name: "Sneha Gupta", roll: "GU2024004", department: "Electronics", year: "1st Year", email: "sneha@example.com" },
  { id: 5, name: "Vikas Singh", roll: "GU2024005", department: "Information Technology", year: "4th Year", email: "vikas@example.com" },
  { id: 6, name: "Neha Yadav", roll: "GU2024006", department: "Computer Science", year: "3rd Year", email: "neha@example.com" },
];

export default function StudentsPage() {
  return (
    <AppShell>
      <div className="section-heading">
        <div>
          <h1>Students</h1>
          <p>Manage and explore student information.</p>
        </div>
        <span className="date-label">{students.length} Students</span>
      </div>

      <div className="data-panel">
        <div className="panel-heading">
          <div className="panel-title">
            <Users />
            <h2>All Students</h2>
          </div>
          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search students..." />
          </div>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Roll Number</th>
                <th>Department</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>
                    <strong>{student.name}</strong>
                    <br />
                    <small>{student.email}</small>
                  </td>
                  <td>{student.roll}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td>
                    <Link href={`/students/${student.id}`} className="view-link">
                      <Eye size={16} /> View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
