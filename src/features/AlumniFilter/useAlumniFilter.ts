import { Alumni, AlumniFilters } from "../../entities/alumni/alumni.types";

export const useAlumniFilter = (alumni: Alumni[], filters: AlumniFilters) => {
  const filteredAlumni = alumni.filter((alum) => {
    // Поиск по имени или описанию
    if (
      filters.searchQuery &&
      !`${alum.name} ${alum.description} ${alum.specialization}`
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Фильтр по году выпуска
    if (
      filters.graduationYearFrom &&
      alum.graduationYear < filters.graduationYearFrom
    ) {
      return false;
    }
    if (
      filters.graduationYearTo &&
      alum.graduationYear > filters.graduationYearTo
    ) {
      return false;
    }

    // Фильтр по учебному заведению
    if (
      filters.institutions &&
      filters.institutions.length > 0 &&
      !filters.institutions.includes(alum.institution)
    ) {
      return false;
    }

    // Фильтр по специальности
    if (
      filters.specializations &&
      filters.specializations.length > 0 &&
      !filters.specializations.some((spec) =>
        alum.specialization.toLowerCase().includes(spec.toLowerCase()),
      )
    ) {
      return false;
    }

    return true;
  });

  return filteredAlumni;
};
