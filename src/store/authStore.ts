import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  isAuthenticated: boolean;

  user: {
    email: string;
  } | null;

  hasHydrated: boolean;

  login: (
    email: string,
    password: string
  ) => boolean;

  logout: () => void;

  setHasHydrated: (
    value: boolean
  ) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,

      user: null,

      hasHydrated: false,

      login: (email, password) => {
        const valid =
          email === "admin@spybee.com" &&
          password === "123456";

        if (valid) {
          set({
            isAuthenticated: true,

            user: {
              email,
            },
          });
        }

        return valid;
      },

      logout: () => {
        set({
          isAuthenticated: false,

          user: null,
        });
      },

      setHasHydrated: (value) =>
        set({
          hasHydrated: value,
        }),
    }),
    {
      name: "spybee-auth",

      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
