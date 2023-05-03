import { Student } from "@/types/students";

export interface StudentTableProps {
  students: Student[];
}

export interface TableStateProps {
  currentPage: number;
  sortOrder: "asc" | "desc";
  itemsPerPage: number;
  sortBy: string;
}
