"use client";

import { useState } from "react";

import FormField from "../FormField/FormField";
import styles from "./IncidentForm.module.scss";

import CategoryField from "../CategoryField/CategoryField";
import LocationSection from "../LocationSection/LocationSection";
import ActionButtons from "../ActionButtons/ActionButtons";
import { useIncidentStore } from "@/store/incidentStore";

interface IncidentFormProps {
    onClose: () => void;
}

const users = [
    "Juan Pérez",
    "Pedro Gómez",
    "María López",
];

export default function IncidentForm({
    onClose,
}: IncidentFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("");

    const [tags, setTags] = useState("");
    const [assignees, setAssignees] = useState("");
    const [observers, setObservers] = useState("");

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [locationDetail, setLocationDetail] = useState("");

    const [attachments, setAttachments] = useState<FileList | null>(null);
    const [error, setError] = useState("");

    const { addIncident } = useIncidentStore();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !title.trim() ||
            !description.trim() ||
            !category ||
            !priority ||
            !latitude ||
            !longitude
        ) {
            setError("Completa todos los campos obligatorios.");
            return;
        }

        setError("");

        addIncident({
            id: crypto.randomUUID(),

            title,
            description,
            dueDate,
            category,
            priority,

            tags,
            assignees,
            observers,

            location: {
                latitude,
                longitude,
                detail: locationDetail,
            },
        });

        setTitle("");
        setDescription("");
        setDueDate("");
        setCategory("");
        setPriority("");

        setTags("");
        setAssignees("");
        setObservers("");

        setLatitude("");
        setLongitude("");
        setLocationDetail("");

        setAttachments(null);

        onClose();
    };


    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >

            {error && (
                <div className={styles.error}>
                    {error}
                </div>
            )}
            <FormField
                label="Título"
                required
            >
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </FormField>

            <FormField
                label="Descripción"
                required
            >
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FormField>

            <div className={styles.separator}></div>

            <FormField
                label="Fecha de vencimiento"
                required
            >
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </FormField>

            <FormField
                label="Categoría"
                required
            >
                <CategoryField
                    value={category}
                    onChange={setCategory}
                />
            </FormField>

            <FormField
                label="Prioridad"
                required
            >
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="">Seleccionar prioridad</option>
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>
                </select>
            </FormField>

            <FormField label="Etiquetas">
                <input
                    type="text"
                    placeholder="Seleccionar etiquetas"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
            </FormField>

            <FormField label="Asignados">
                <select
                    value={assignees}
                    onChange={(e) => setAssignees(e.target.value)}
                >
                    <option value="">Seleccionar asignado</option>

                    {users.map((user) => (
                        <option
                            key={user}
                            value={user}
                        >
                            {user}
                        </option>
                    ))}
                </select>
            </FormField>

            <FormField label="Observadores">
                <select
                    value={observers}
                    onChange={(e) => setObservers(e.target.value)}
                >
                    <option value="">Seleccionar observador</option>
                    <option value="María">María</option>
                    <option value="Ana">Ana</option>
                </select>
            </FormField>

            <LocationSection
                latitude={latitude}
                longitude={longitude}
                locationDetail={locationDetail}
                onLatitudeChange={setLatitude}
                onLongitudeChange={setLongitude}
                onLocationDetailChange={setLocationDetail}
            />

            <div className={styles.attachments}>
                <h3>Archivos Adjuntos</h3>

                <input
                    type="file"
                    multiple
                    onChange={(e) => setAttachments(e.target.files)}
                />

                {attachments && (
                    <ul className={styles.fileList}>
                        {Array.from(attachments).map((file) => (
                            <li key={file.name}>{file.name}</li>
                        ))}
                    </ul>
                )}
            </div>

            <ActionButtons
                onCancel={onClose}
            />
        </form>
    );
}