import styles from "./IncidentTable.module.scss";
import type { DashboardIncident } from "@/types/dashboardIncident";

interface IncidentTableProps {
    incidents: DashboardIncident[];
}

const priorityLabels = {
    high: "Alta",
    medium: "Media",
    low: "Baja",
};

const statusLabels = {
    open: "Abierta",
    closed: "Cerrada",
    pending: "Pendiente",
};

export default function IncidentTable({
    incidents,
}: IncidentTableProps) {
    return (
        <div className={styles.container}>
            <h2>Incidencias recientes</h2>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Tipo</th>
                            <th>Prioridad</th>
                            <th>Estado</th>
                            <th>Proyecto</th>
                            <th>Responsable</th>
                        </tr>
                    </thead>

                    <tbody>
                        {incidents.map((incident) => (
                            <tr key={incident.id}>
                                <td>{incident.sequenceId}</td>
                                <td>{incident.title}</td>
                                <td>{incident.type.name}</td>
                                <td>
                                    <span className={`${styles.badge} ${styles[incident.priority]}`}>
                                        {
                                            priorityLabels[
                                            incident.priority as keyof typeof priorityLabels
                                            ]
                                        }
                                    </span>
                                </td>

                                <td>
                                    <span className={`${styles.badge} ${styles[incident.status]}`}>
                                        {
                                            statusLabels[
                                            incident.status as keyof typeof statusLabels
                                            ]
                                        }
                                    </span>
                                </td>
                                <td>{incident.project.name}</td>
                                <td>{incident.owner.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}