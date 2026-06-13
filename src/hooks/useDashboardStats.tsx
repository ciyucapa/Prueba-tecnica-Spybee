import incidents from "@/mocks/incidents.mock.json";

export const useDashboardStats = () => {
  const high = incidents.filter(
    (i) => i.priority === "high"
  ).length;

  const medium = incidents.filter(
    (i) => i.priority === "medium"
  ).length;

  const low = incidents.filter(
    (i) => i.priority === "low"
  ).length;

  return [
    {
      title: "Total incidencias",
      value: incidents.length,
      filter: "",
    },
    {
      title: "Prioridad Alta",
      value: high,
      filter: "high",
    },
    {
      title: "Prioridad Media",
      value: medium,
      filter: "medium",
    },
    {
      title: "Prioridad Baja",
      value: low,
      filter: "low",
    },
  ];
};