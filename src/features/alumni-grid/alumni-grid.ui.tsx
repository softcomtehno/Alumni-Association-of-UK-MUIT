"use client";

import { useState, useMemo } from "react";
import { AlumniCard } from "~entities/alumni";
import { AlumniFilters } from "~features/AlumniFilter";
import { ALUMNI_DATA } from "~entities/alumni";
import { useAlumniFilter } from "~features/AlumniFilter";
import { Button } from "~app/components/ui/button";

export const AlumniGrid = () => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    graduationYear: null as number | null,
    selectedInstitutions: [] as string[],
    selectedSpecializations: [] as string[],
  });

  // Получаем уникальные значения для фильтров
  const institutions = useMemo(
    () => Array.from(new Set(ALUMNI_DATA.map((a) => a.institution))),
    []
  );

  const specializations = useMemo(
    () => Array.from(new Set(ALUMNI_DATA.map((a) => a.specialization))),
    []
  );

  const graduationYears = Array.from(
    { length: new Date().getFullYear() - 2000 + 1 },
    (_, i) => 2000 + i
  ).reverse();

  const filteredAlumni = useAlumniFilter(ALUMNI_DATA, {
    searchQuery: filters.searchQuery,
    graduationYear: filters.graduationYear,
    institutions: filters.selectedInstitutions,
    specializations: filters.selectedSpecializations,
  });

  const handleFiltersChange = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleReset = () => {
    setFilters({
      searchQuery: "",
      graduationYear: null,
      selectedInstitutions: [],
      selectedSpecializations: [],
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto mt-[40px]">
      <AlumniFilters
        institutions={institutions}
        specializations={specializations}
        graduationYears={graduationYears}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        onReset={handleReset}
      />

      {filteredAlumni.length > 0 ? (
        <div className="mt-[40px] flex gap-6 flex-wrap">
          {filteredAlumni.map((alumni) => (
            <AlumniCard key={alumni.id} alumni={alumni} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">Ничего не найдено</h3>
          <p className="text-muted-foreground mt-2">
            Попробуйте изменить параметры фильтрации
          </p>
          <Button variant="outline" className="mt-4" onClick={handleReset}>
            Сбросить фильтры
          </Button>
        </div>
      )}
    </div>
  );
};