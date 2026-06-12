import { create } from "zustand";
import type { Incident } from "@/types/incident";


interface IncidentStore {
  incidents: Incident[];

  addIncident: (incident: Incident) => void;
}

export const useIncidentStore = create<IncidentStore>((set) => ({
  incidents: [],

  addIncident: (incident) =>
    set((state) => ({
      incidents: [...state.incidents, incident],
    })),
}));