import { View, Text } from "@adobe/react-spectrum";

import styles from "./TableHeader.module.css";
import { HeaderTableProps } from "./types";

const TableHeader = ({
  tableState,
  setTableState,
  setSortedTableData,
  sortedTableData,
}: HeaderTableProps) => {
  const sortByName = () => {
    const sorted = [...sortedTableData].sort((a, b) =>
      tableState.sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setSortedTableData(sorted);
    setTableState({
      ...tableState,
      sortOrder: tableState.sortOrder === "asc" ? "desc" : "asc",
      sortBy: "name",
    });
  };

  const sortByProgress = () => {
    const sorted = [...sortedTableData].sort((a, b) =>
      tableState.sortOrder === "asc"
        ? a.progress - b.progress
        : b.progress - a.progress
    );
    setSortedTableData(sorted);
    setTableState({
      ...tableState,
      sortOrder: tableState.sortOrder === "asc" ? "desc" : "asc",
      sortBy: "progress",
    });
  };

  return (
    <View UNSAFE_className={styles.tableHeader}>
      <View UNSAFE_className={styles.tableHeaderCell}>
        <Text>
          Name
          <span className={styles.sortingArrow} onClick={sortByName}>
            {tableState.sortOrder === "asc" && tableState.sortBy === "name"
              ? "\u25BC"
              : "\u25B2"}
          </span>
        </Text>
      </View>
      <View UNSAFE_className={styles.tableHeaderCell}>
        <Text>Course</Text>
      </View>
      <View UNSAFE_className={styles.tableHeaderCell}>
        <Text>Lesson</Text>
      </View>
      <View UNSAFE_className={styles.tableHeaderCell}>
        <Text>Progress</Text>
      </View>
      <View UNSAFE_className={styles.tableHeaderCell}></View>
    </View>
  );
};

export default TableHeader;
