import Image from "next/image";
import styles from "./IncidentTable.module.scss";
import type { DashboardIncident } from "@/types/dashboardIncident";

interface IncidentTableProps {
    incidents: DashboardIncident[];
    onRowClick: (incident: DashboardIncident) => void;
    onClear: () => void;
}

const priorityLabels = {
    high: "Alta",
    medium: "Media",
    low: "Baja",
};

const statusLabels = {
    open: "Abierta",
    closed: "Cerrada",
    on_pause: "En pausa",
};

export default function IncidentTable({
    incidents,
    onRowClick,
    onClear
}: IncidentTableProps) {

    if (incidents.length === 0) {
        return (
            <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔍</div>

                <h2>No se encontraron incidencias</h2>

                <p>
                    Intenta cambiar los filtros o la búsqueda para ver resultados.
                </p>

                <button
                    className={styles.clearButton}
                    onClick={onClear}
                >
                    Limpiar filtros
                </button>
            </div>
        );
    }

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
                            <tr key={incident.id} onClick={() => onRowClick(incident)}>
                                <td>{incident.sequenceId}</td>
                                <td title={incident.title}>
                                    {incident.title}
                                </td>
                                <td>{incident.type?.name}</td>
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
                                <td>{incident.project?.name ?? "Sin proyecto"}</td>
                                <td>
                                    <div className={styles.owner}>
                                        {incident.owner?.avatarUrl && (
                                            <Image
                                                src={incident.owner.avatarUrl}
                                                alt={incident.owner.name}
                                                className={styles.avatar}
                                                width={20}
                                                height={20}
                                                priority
                                            />
                                        )}

                                        <span>
                                            {incident.owner?.name ?? "Sin responsable"}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}