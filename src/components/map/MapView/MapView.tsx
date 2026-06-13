"use client";

import styles from "./MapView.module.scss";
import { useMapView } from "@/hooks/useMapView";

export default function MapView() {
 const {mapContainer} = useMapView()

  return (
    <div
      ref={mapContainer}
      className={styles.map}
    />
  );
}