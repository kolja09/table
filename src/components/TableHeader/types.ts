import { Student } from "@/types/students";
import { TableStateProps } from "../StudentTable/types";

export interface HeaderTableProps {
  tableState: TableStateProps;
  setSortedTableData: (data:Student[]) => void;
  sortedTableData: Student[]
  setTableState: (option: TableStateProps) => void;
}
