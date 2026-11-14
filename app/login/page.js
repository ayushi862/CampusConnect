"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GraduationCap, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <main className="simple-login-page">
      <div className="simple-login-card">
        <Link href="/" className="login-logo">
          <GraduationCap size={30} />
          CampusConnect
        </Link>

        <h1>Welcome back</h1>
        <p className="login-description">
          Sign in to access your student portal.
        </p>

        <form onSubmit={handleLogin}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>

          <button type="submit" className="simple-login-button">
            Login
          </button>
        </form>

        <p className="login-back">
          <Link href="/">← Back to Home</Link>
        </p>
      </div>
    </main>
  );
}