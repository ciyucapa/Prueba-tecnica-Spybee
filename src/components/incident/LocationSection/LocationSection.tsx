"use client";

import MapView from "@/components/map/MapView/MapView";
import styles from "./LocationSection.module.scss";

interface LocationSectionProps {
  latitude: string;
  longitude: string;
  locationDetail: string;
  onLatitudeChange: (value: string) => void;
  onLongitudeChange: (value: string) => void;
  onLocationDetailChange: (value: string) => void;
}

export default function LocationSection({
  latitude,
  longitude,
  locationDetail,
  onLatitudeChange,
  onLongitudeChange,
  onLocationDetailChange,
}: LocationSectionProps) {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Ubicación</h3>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Latitud</label>

          <input
            type="text"
            value={latitude}
            onChange={(e) => onLatitudeChange(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label>Longitud</label>

          <input
            type="text"
            value={longitude}
            onChange={(e) => onLongitudeChange(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label>Detalles de localización</label>

        <input
          type="text"
          value={locationDetail}
          onChange={(e) => onLocationDetailChange(e.target.value)}
        />
      </div>

      <div className={styles.map}>
        <MapView />
      </div>
    </section>
  );
}