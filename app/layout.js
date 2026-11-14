
import "./globals.css";

export const metadata = {
  title: "CampusConnect | Student Portal",
  description: "Student Management Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
