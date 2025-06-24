"use client";

import { Input } from "~app/components/ui/input";
import { Button } from "~app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~app/components/ui/select";
import { Search, X } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";

interface AlumniFiltersProps {
  institutions: string[];
  specializations: string[];
  graduationYears: number[];
  filters: {
    searchQuery: string;
    graduationYear: number | null;
    selectedInstitutions: string[];
    selectedSpecializations: string[];
  };
  onFiltersChange: (
    newFilters: Partial<{
      searchQuery: string;
      graduationYear: number | null;
      selectedInstitutions: string[];
      selectedSpecializations: string[];
    }>,
  ) => void;
  onReset: () => void;
}

export const AlumniFilters = ({
  institutions,
  specializations,
  graduationYears,
  filters,
  onFiltersChange,
  onReset,
}: AlumniFiltersProps) => {
  const handleInstitutionSelect = (value: string) => {
    if (!filters.selectedInstitutions.includes(value)) {
      onFiltersChange({
        selectedInstitutions: [...filters.selectedInstitutions, value],
      });
    }
  };

  const handleSpecializationSelect = (value: string) => {
    if (!filters.selectedSpecializations.includes(value)) {
      onFiltersChange({
        selectedSpecializations: [...filters.selectedSpecializations, value],
      });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center gap-4">
        {/* Поиск */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-[11px] h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Найти студента"
            className=" border text-[#363F51] focus:border-[#A4C6E6] focus-visible:ring-0 selection-border-none focus:ring-0 focus:outline-none font-medium text-base !outline-none border-solid border-[#A4C6E6] pl-[35px] bg-white  rounded-lg shadow-sm hover:border-[#6366F1]  focus:ring-1 focus:ring-[#6366F1] transition-colors duration-200"
            value={filters.searchQuery}
            onChange={(e) => onFiltersChange({ searchQuery: e.target.value })}
          />
        </div>

        {/* Год выпуска */}
        <Select
          value={filters.graduationYear?.toString() || ""}
          onValueChange={(value) =>
            onFiltersChange({
              graduationYear: value ? parseInt(value) : null,
            })
          }
        >
          <SelectTrigger className="w-[220px] h-10 bg-white border border-[#E2E8F0] rounded-lg shadow-sm hover:border-[#6366F1] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-colors duration-200">
            <SelectValue placeholder="Все года" />
          </SelectTrigger>
          <SelectContent className="mt-1 py-1 w-[220px] bg-white border border-[#E2E8F0] rounded-lg shadow-lg animate-in fade-in-80">
            <SelectItem value="Все года">Все года</SelectItem>
            {graduationYears.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Учебное заведение */}
        <Select value="" onValueChange={handleInstitutionSelect}>
          <SelectTrigger className="w-[220px] h-10 bg-white border border-[#E2E8F0] rounded-lg shadow-sm hover:border-[#6366F1] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-colors duration-200">
            <SelectValue
              placeholder={
                <span className="text-[#64748B] font-medium">
                  Учебное заведение
                </span>
              }
            />
            <ChevronsUpDown className="h-4 w-4 ml-2 text-[#94A3B8]" />
          </SelectTrigger>

          <SelectContent className="mt-1 py-1 w-[220px] bg-white border border-[#E2E8F0] rounded-lg shadow-lg animate-in fade-in-80">
            {institutions
              .filter((inst) => !filters.selectedInstitutions.includes(inst))
              .map((inst) => (
                <SelectItem
                  key={inst}
                  value={inst}
                  className="px-3 py-2 text-[#363F51] hover:bg-[#F1F5F9] focus:bg-[#F1F5F9] cursor-pointer transition-colors"
                >
                  {inst}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>

        {/* Специальность */}
        <Select value="" onValueChange={handleSpecializationSelect}>
          <SelectTrigger className="w-[220px] h-10 bg-white border border-[#E2E8F0] rounded-lg shadow-sm hover:border-[#6366F1] focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-colors duration-200">
            <SelectValue placeholder="Специальность" />
          </SelectTrigger>
          <SelectContent className="mt-1 py-1 w-[220px] bg-white border border-[#E2E8F0] rounded-lg shadow-lg animate-in fade-in-80">
            {specializations
              .filter((spec) => !filters.selectedSpecializations.includes(spec))
              .map((spec) => (
                <SelectItem key={spec} value={spec}>
                  {spec}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {/* Выбранные фильтры */}
      <div className="mt-4 flex flex-wrap gap-2">
        {filters.graduationYear !== null && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {filters.graduationYear}
            <button
              onClick={() => onFiltersChange({ graduationYear: null })}
              className="ml-2"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        )}

        {filters.selectedInstitutions.map((inst) => (
          <span
            key={inst}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
          >
            {inst}
            <button
              onClick={() =>
                onFiltersChange({
                  selectedInstitutions: filters.selectedInstitutions.filter(
                    (i) => i !== inst,
                  ),
                })
              }
              className="ml-2"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}

        {filters.selectedSpecializations.map((spec) => (
          <span
            key={spec}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
          >
            {spec}
            <button
              onClick={() =>
                onFiltersChange({
                  selectedSpecializations:
                    filters.selectedSpecializations.filter((s) => s !== spec),
                })
              }
              className="ml-2"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}

        {(filters.graduationYear !== null ||
          filters.selectedInstitutions.length > 0 ||
          filters.selectedSpecializations.length > 0) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="ml-auto"
          >
            Сбросить все
          </Button>
        )}
      </div>
    </div>
  );
};
