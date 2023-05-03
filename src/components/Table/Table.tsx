import React from "react";
import { View } from "@adobe/react-spectrum";

import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";
import TableFooter from "../TableFooter/TableFooter";

import styles from "./Table.module.css";
import { TableProps } from "./types";

const Table = ({
  tableState,
  deleteItem,
  openEditDialog,
  setTableState,
  sortedTableData,
  setSortedTableData,
}: TableProps) => {
  const paginatedData = sortedTableData.slice(
    (tableState.currentPage - 1) * tableState.itemsPerPage,
    tableState.currentPage * tableState.itemsPerPage
  );

  return (
    <>
      <View UNSAFE_className={styles.table}>
        <TableHeader
          sortedTableData={sortedTableData}
          setSortedTableData={setSortedTableData}
          tableState={tableState}
          setTableState={setTableState}
        />
        <TableBody
          paginatedData={paginatedData}
          openEditDialog={openEditDialog}
          deleteItem={deleteItem}
        />
      </View>
      <TableFooter
        setTableState={setTableState}
        sortedTableData={sortedTableData}
        tableState={tableState}
      />
    </>
  );
};

export default Table;
