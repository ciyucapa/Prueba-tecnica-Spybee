import incidents from "@/mocks/incidents.mock.json";

import StatsCard from "@/components/dashboard/StatsCard/StatsCard";
import DashboardGrid from "@/components/dashboard/DashboardGrid/DashboardGrid";
import IncidentTable from "@/components/dashboard/IncidentTable/IncidentTable";



export default function DashboardPage() {
    const high = incidents.filter(
        (incident) => incident.priority === "high"
    ).length;

    const medium = incidents.filter(
        (incident) => incident.priority === "medium"
    ).length;

    const low = incidents.filter(
        (incident) => incident.priority === "low"
    ).length;

    const stats = [
        {
            title: "Total incidencias",
            value: incidents.length,
        },
        {
            title: "Prioridad Alta",
            value: high,
        },
        {
            title: "Prioridad Media",
            value: medium,
        },
        {
            title: "Prioridad Baja",
            value: low,
        },
    ];

    return (
        <main style={{ padding: "32px" }}>
            <DashboardGrid>
                {stats.map((stat) => (
                    <StatsCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                    />
                ))}
            </DashboardGrid>
            <IncidentTable incidents={incidents.slice(0, 10)} />
        </main>
    );
}