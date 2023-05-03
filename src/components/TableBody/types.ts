import { Student } from "@/types/students";

export interface TMainTable {
    paginatedData: Student[],
    deleteItem: (id:number) => void
    openEditDialog: (data: Student) => void
}