"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import styles from "./MapView.module.scss";
import { useIncidentStore } from "@/store/incidentStore";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  const incidents = useIncidentStore(
    (state) => state.incidents
  );

  // Crear el mapa una sola vez
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-74.058, 4.652],
      zoom: 17,
    });

    mapRef.current.addControl(
      new mapboxgl.NavigationControl()
    );

    return () => {
      markersRef.current.forEach((marker) => marker.remove());

      mapRef.current?.remove();

      mapRef.current = null;
    };
  }, []);

  // Dibujar marcadores
  useEffect(() => {

    const map = mapRef.current;

    if (!map) return;

    // Eliminar marcadores anteriores
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];


    incidents.forEach((incident) => {
      const priorityColor =
        incident.priority === "Alta"
          ? "#ef4444"
          : incident.priority === "Media"
          ? "#f59e0b"
          : "#22c55e";

      const marker = new mapboxgl.Marker()
        .setLngLat([
          Number(incident.location.longitude),
          Number(incident.location.latitude),
        ])
        .setPopup(
          new mapboxgl.Popup({
            offset: 25,
          }).setHTML(`
            <div style="min-width:230px;padding:8px;">

              <h3 style="margin:0 0 10px;font-size:16px;font-weight:600;">
                📍 ${incident.title}
              </h3>

              <p style="margin:0 0 12px;color:#555;font-size:14px;">
                ${incident.description}
              </p>

              <hr style="border:none;border-top:1px solid #ececec;margin:10px 0;" />

              <p style="margin:6px 0;">
                <strong>📂 Categoría:</strong>
                ${incident.category}
              </p>

              <p style="margin:6px 0;">
                <strong>⚠️ Prioridad:</strong>
                <span style="color:${priorityColor};font-weight:bold;">
                  ${incident.priority}
                </span>
              </p>

              <p style="margin:6px 0;">
                <strong>📍 Ubicación:</strong>
                ${incident.location.detail}
              </p>

            </div>
          `)
        )
        .addTo(map);

      markersRef.current.push(marker);
    });

    // Centrar el mapa en la última incidencia creada
    if (incidents.length > 0) {
      const lastIncident = incidents[incidents.length - 1];

      map.flyTo({
        center: [
          Number(lastIncident.location.longitude),
          Number(lastIncident.location.latitude),
        ],
        zoom: 18,
        duration: 1500,
      });
    }
  }, [incidents]);

  return (
    <div
      ref={mapContainer}
      className={styles.map}
    />
  );
}