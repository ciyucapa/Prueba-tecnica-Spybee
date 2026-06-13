"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";
import styles from "./page.module.scss";

export default function LoginPage() {
  const router = useRouter();

  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(email, password);

    if (!success) {
      setError("Invalid credentials");
      return;
    }

    router.push("/");
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Spybee</h1>
        <p className={styles.subtitle}> Sign in to continue </p>
        <div className={styles.field}>
          <label>Email</label>
          <input className={styles.input} placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input className={styles.input} type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && (<p className={styles.error}> {error} </p>)}
        <button className={styles.button} onClick={handleLogin} >
          Login
        </button>
        <div className={styles.credentials}>
          <strong>Demo credentials</strong>
          <p>Email: admin@spybee.com</p>
          <p>Password: 123456</p>
        </div>
      </div>
    </main>
  );
}