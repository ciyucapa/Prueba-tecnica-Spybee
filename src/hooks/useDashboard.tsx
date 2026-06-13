import { useState, useEffect } from "react";
import incidents from "@/mocks/incidents.mock.json";

export const useDashboard = () => {
  const [priorityFilter, setPriorityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredIncidents = incidents.filter((incident) => {
    const matchesPriority =
      !priorityFilter || incident.priority === priorityFilter;

    const matchesStatus =
      !statusFilter || incident.status === statusFilter;

    const matchesSearch = incident.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesPriority && matchesStatus && matchesSearch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [priorityFilter, statusFilter, search]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedIncidents = filteredIncidents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

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

  return {
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
  };
};