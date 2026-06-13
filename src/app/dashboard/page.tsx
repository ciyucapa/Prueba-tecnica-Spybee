"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import incidents from "@/mocks/incidents.mock.json";

import StatsCard from "@/components/dashboard/StatsCard/StatsCard";
import DashboardGrid from "@/components/dashboard/DashboardGrid/DashboardGrid";
import IncidentTable from "@/components/dashboard/IncidentTable/IncidentTable";
import Filters from "@/components/dashboard/Filters/Filters";
import Pagination from "@/components/dashboard/Pagination/Pagination";
import { DashboardIncident } from "@/types/dashboardIncident";
import IncidentDetailModal from "@/components/dashboard/IncidentDetailModal/IncidentDetailModal";



export default function DashboardPage() {
    const high = incidents.filter(
        (incident) => incident.priority === "high"
    ).length;

    const medium = incidents.filter(
        (incident) => incident.priority === "medium"
    ).length;

    const low = incidents.filter(
        (incident) => incident.priority === "low"
    ).length;

    const stats = [
        {
            title: "Total incidencias",
            value: incidents.length,
            filter: "",
        },
        {
            title: "Prioridad Alta",
            value: high,
            filter: "high",
        },
        {
            title: "Prioridad Media",
            value: medium,
            filter: "medium",
        },
        {
            title: "Prioridad Baja",
            value: low,
            filter: "low",
        },
    ];

    const [priorityFilter, setPriorityFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [search, setSearch] = useState("");

    const filteredIncidents = incidents.filter((incident) => {
        const matchesPriority =
            !priorityFilter || incident.priority === priorityFilter;

        const matchesStatus =
            !statusFilter || incident.status === statusFilter;

        const matchesSearch =
            incident.title
                .toLowerCase()
                .includes(search.toLowerCase());

        return (
            matchesPriority &&
            matchesStatus &&
            matchesSearch
        );
    });

    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 10;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const paginatedIncidents = filteredIncidents.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [priorityFilter, statusFilter, search]);

    const from =
        filteredIncidents.length === 0
            ? 0
            : startIndex + 1;

    const to = Math.min(
        startIndex + ITEMS_PER_PAGE,
        filteredIncidents.length
    );

    const clearFilters = () => {
        setPriorityFilter("");
        setStatusFilter("");
        setSearch("");
    };

    const [selectedIncident, setSelectedIncident] =
        useState<DashboardIncident | null>(null);


    return (
        <main style={{ padding: "32px" }}>
            <DashboardGrid>
                {stats.map((stat) => (
                    <StatsCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        active={priorityFilter === stat.filter}
                        onClick={() =>
                            setPriorityFilter(
                                priorityFilter === stat.filter
                                    ? ""
                                    : stat.filter
                            )
                        }
                    />
                ))}
            </DashboardGrid>
            <Filters
                priority={priorityFilter}
                status={statusFilter}
                search={search}
                onPriorityChange={setPriorityFilter}
                onStatusChange={setStatusFilter}
                onSearchChange={setSearch}
                onClear={clearFilters}
            />

            <p className={styles.results}>
                Mostrando {from} - {to} de {filteredIncidents.length} incidencias
            </p>

            <IncidentTable
                incidents={paginatedIncidents}
                onRowClick={setSelectedIncident}
                onClear={clearFilters}
            />

            <Pagination
                currentPage={currentPage}
                totalItems={filteredIncidents.length}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={setCurrentPage}
            />

            {selectedIncident && (
                <IncidentDetailModal
                    incident={selectedIncident}
                    onClose={() => setSelectedIncident(null)}
                />
            )}
        </main>
    );
}