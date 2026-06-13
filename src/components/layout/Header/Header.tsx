"use client";

import { useRouter } from "next/navigation";

import styles from "./Header.module.scss";
import { useAuthStore } from "@/store/authStore";

export default function Header() {
  const router = useRouter();

  const logout = useAuthStore(
    (state) => state.logout
  );

  const user = useAuthStore(
    (state) => state.user
  );

  const username =
    user?.email?.split("@")[0] ?? "User";

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Spybee
      </div>

      <h2 className={styles.title}>
        Proyecto Onboarding
      </h2>

      <div className={styles.actions}>
        <button
          className={styles.navButton}
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </button>

        <button
          className={styles.navButton}
          onClick={() => router.push("/")}
        >
          Map
        </button>

        <div className={styles.user}>
          <div className={styles.avatar}>
            {username.charAt(0).toUpperCase()}
          </div>

          <span>{username}</span>
        </div>

        <button
          className={styles.logoutButton}
          onClick={() => {
            logout();
            router.replace("/login");
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
