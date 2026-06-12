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
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    // Eliminar marcadores anteriores
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    incidents.forEach((incident) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([
          Number(incident.location.longitude),
          Number(incident.location.latitude),
        ])
        .setPopup(
          new mapboxgl.Popup().setHTML(`
            <strong>${incident.title}</strong>
            <br/>
            ${incident.description}
            <br/>
            ${incident.location.detail}
          `)
        )
        .addTo(mapRef.current!);

      markersRef.current.push(marker);
    });

    // Centrar el mapa en la última incidencia creada
    if (incidents.length > 0) {
      const lastIncident = incidents[incidents.length - 1];

      mapRef.current.flyTo({
        center: [
          Number(lastIncident.location.longitude),
          Number(lastIncident.location.latitude),
        ],
        zoom: 17,
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