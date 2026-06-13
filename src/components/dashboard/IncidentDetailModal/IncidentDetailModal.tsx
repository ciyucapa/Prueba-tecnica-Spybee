import Image from "next/image";
import styles from "./IncidentDetailModal.module.scss";

import type { DashboardIncident } from "@/types/dashboardIncident";

interface IncidentDetailModalProps {
    incident: DashboardIncident;
    onClose: () => void;
}

export default function IncidentDetailModal({
    incident,
    onClose,
}: IncidentDetailModalProps) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>
                        Incidencia #{incident.sequenceId}
                    </h2>

                    <button
                        onClick={onClose}
                        className={styles.closeButton}
                    >
                        ✕
                    </button>
                </div>

                <div className={styles.content}>
                    <div className={styles.field}>
                        <label>Título</label>
                        <p>{incident.title}</p>
                    </div>

                    <div className={styles.field}>
                        <label>Descripción</label>
                        <p>{incident.description}</p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.field}>
                            <label>Tipo</label>
                            <p>{incident.type?.name}</p>
                        </div>

                        <div className={styles.field}>
                            <label>Prioridad</label>
                            <p>{incident.priority}</p>
                        </div>

                        <div className={styles.field}>
                            <label>Estado</label>
                            <p>{incident.status}</p>
                        </div>

                        <div className={styles.field}>
                            <label>Proyecto</label>
                            <p>{incident.project?.name}</p>
                        </div>

                        <div className={styles.field}>
                            <label>Responsable</label>
                            <p>
                                {incident.owner?.name ??
                                    "Sin responsable"}
                            </p>
                        </div>

                        <div className={styles.field}>
                            <label>Ubicación</label>
                            <p>{incident.locationDescription}</p>
                        </div>

                        {incident.assignees.length > 0 && (
                            <div className={styles.section}>
                                <h3>Asignados</h3>

                                {incident.assignees.map((assignee) => (
                                    <div
                                        key={assignee.id}
                                        className={styles.person}
                                    >
                                        <Image
                                            src={assignee.avatarUrl}
                                            alt={assignee.name}
                                            width={40}
                                            height={40}
                                            priority
                                        />

                                        <span>{assignee.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {incident.observers.length > 0 && (
                            <div className={styles.section}>
                                <h3>Observadores</h3>

                                {incident.observers.map((observer) => (
                                    <div
                                        key={observer.id}
                                        className={styles.person}
                                    >
                                        <Image
                                            src={observer.avatarUrl}
                                            alt={observer.name}
                                            width={40}
                                            height={40}
                                            priority
                                        />

                                        <span>{observer.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {incident.tags.length > 0 && (
                            <div className={styles.section}>
                                <h3>Etiquetas</h3>

                                <div className={styles.tags}>
                                    {incident.tags.map((tag) => (
                                        <span
                                            key={tag.id}
                                            className={styles.tag}
                                            style={{
                                                background: tag.color,
                                            }}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {incident.media.length > 0 && (
                            <div className={styles.section}>
                                <h3>Evidencias</h3>

                                <div className={styles.gallery}>
                                    {incident.media.map((media) => (
                                        <div
                                            key={media.id}
                                            className={styles.mediaCard}
                                        >
                                            {media.type === "image" ? (
                                                <Image
                                                    src={media.url}
                                                    alt={media.name}
                                                    width={300}
                                                    height={200}
                                                    priority
                                                />
                                            ) : (
                                                <video controls>
                                                    <source src={media.url} />
                                                </video>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className={styles.footer}>
                    <button
                        className={styles.button}
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}