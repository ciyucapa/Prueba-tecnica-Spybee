"use client";

import { useState } from "react";
import styles from "./page.module.scss";

import StatsCard from "@/components/dashboard/StatsCard/StatsCard";
import DashboardGrid from "@/components/dashboard/DashboardGrid/DashboardGrid";
import IncidentTable from "@/components/dashboard/IncidentTable/IncidentTable";
import Filters from "@/components/dashboard/Filters/Filters";
import Pagination from "@/components/dashboard/Pagination/Pagination";
import { DashboardIncident } from "@/types/dashboardIncident";
import IncidentDetailModal from "@/components/dashboard/IncidentDetailModal/IncidentDetailModal";
import { useDashboard } from "@/hooks/useDashboard";
import { useDashboardStats } from "@/hooks/useDashboardStats";
import ProtectedRoute from "@/components/auth/ProtectedRoute/ProtectedRoute";
import Header from "@/components/layout/Header/Header";


export default function DashboardPage() {

    const stats = useDashboardStats();
    const {
        priorityFilter,
        statusFilter,
        search,
        currentPage,
        filteredIncidents,
        paginatedIncidents,
        from,
        to,
        ITEMS_PER_PAGE,
        setPriorityFilter,
        setStatusFilter,
        setSearch,
        setCurrentPage,
        clearFilters,
    } = useDashboard();

    const [selectedIncident, setSelectedIncident] =
        useState<DashboardIncident | null>(null);


    return (
        <ProtectedRoute>
            <Header/>
            <main style={{ padding: "110px 32px 32px" }}>
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
        </ProtectedRoute>
    );
}