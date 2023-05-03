import { View } from "@adobe/react-spectrum";

import Pagination from "../Pagination/Pagination";

import styles from "./TableFooter.module.css";
import { FooterTableProps } from "./types";

const TableFooter = ({
  tableState,
  sortedTableData,
  setTableState,
}: FooterTableProps) => {
  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTableState({
      ...tableState,
      itemsPerPage: Number(event.target.value),
      currentPage: 1,
    });
  };

  return (
    <View UNSAFE_className={styles.paginationContainer}>
      <Pagination
        totalItems={sortedTableData.length}
        itemsPerPage={tableState.itemsPerPage}
        currentPage={tableState.currentPage}
        onChange={(newPage) =>
          setTableState({ ...tableState, currentPage: newPage })
        }
      />
      {sortedTableData.length ? (
        <select
          value={tableState.itemsPerPage}
          onChange={handleItemsPerPageChange}
          className={styles.itemsPerPageSelector}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={8}>8</option>
        </select>
      ) : (
        <></>
      )}
    </View>
  );
};

export default TableFooter;
