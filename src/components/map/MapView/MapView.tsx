"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./MapView.module.scss";

mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-74.058, 4.652],
      zoom: 17,
    });

    map.addControl(new mapboxgl.NavigationControl());

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className={styles.map} />;
}