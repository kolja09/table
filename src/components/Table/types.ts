import { Student } from "@/types/students";
import { TableStateProps } from "../StudentTable/types";

export interface TableProps {
  tableState: TableStateProps;
  deleteItem: (id:number) => void;
  openEditDialog: (data:Student) => void
  setTableState: (option: TableStateProps) => void;
  sortedTableData: Student[];
  setSortedTableData: (data: Student[]) => void
}
