export interface Alumni {
  id: string;
  name: string;
  institution: string;
  graduationYear: number;
  gpa?: number;
  specialization: string;
  description: string;
  imageUrl?: string;
  contacts?: {
    email?: string;
    phone?: string;
    linkedIn?: string;
  };
}
export interface AlumniFilters {
  searchQuery?: string;
  graduationYearFrom?: number;
  graduationYearTo?: number;
  institutions?: string[];
  specializations?: string[];
}
