import { Student } from "@/types/students";
import { TableStateProps } from "../StudentTable/types";

export interface FooterTableProps {
  tableState: TableStateProps;
  sortedTableData: Student[];
  setTableState: (option: TableStateProps) => void;
}
