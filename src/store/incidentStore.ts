import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Incident } from "@/types/incident";


interface IncidentStore {
  incidents: Incident[];
  addIncident: (incident: Incident) => void;
  clearIncidents: () => void;
}

export const useIncidentStore = create<IncidentStore>()(
  persist(
    (set) => ({
      incidents: [],

      addIncident: (incident) =>
        set((state) => ({
          incidents: [...state.incidents, incident],
        })),

      clearIncidents: () =>
        set({
          incidents: [],
        }),
    }),
    {
      name: "spybee-incidents",
    }
  )
);