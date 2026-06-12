"use client";

import { X } from "lucide-react";

import IncidentForm from "../IncidentForm/IncidentForm";

import styles from "./IncidentModal.module.scss";

interface IncidentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function IncidentModal({
  open,
  onClose,
}: IncidentModalProps) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Crear Incidencia</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <IncidentForm onClose={onClose} />
      </div>
    </div>
  );
}