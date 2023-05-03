import React from "react";
import { ActionButton, View, Text } from "@adobe/react-spectrum";

import styles from "./TableBody.module.css";
import { TMainTable } from "./types";

const TableBody = ({
  paginatedData,
  openEditDialog,
  deleteItem,
}: TMainTable) => {
  return (
    <>
      {paginatedData.length ? (
        paginatedData?.map((dataTable) => (
          <View key={dataTable.id} UNSAFE_className={styles.tableRow}>
            <View UNSAFE_className={styles.tableCell}>
              <Text>{dataTable.name}</Text>
            </View>
            <View UNSAFE_className={styles.tableCell}>
              <Text>{dataTable.course}</Text>
            </View>
            <View UNSAFE_className={styles.tableCell}>
              <Text>{dataTable.lesson}</Text>
            </View>
            <View UNSAFE_className={styles.tableCell}>
              <Text>{dataTable.progress}%</Text>
            </View>
            <View UNSAFE_className={styles.tableCell}>
              <ActionButton
                UNSAFE_className={styles.actionButton}
                onPress={() => {
                  openEditDialog(dataTable);
                }}
                aria-label="Edit student"
              >
                Edit
              </ActionButton>
              <ActionButton
                UNSAFE_className={styles.actionButton}
                onPress={() => {
                  deleteItem(dataTable.id);
                }}
                aria-label="Delete student"
              >
                Delete
              </ActionButton>
            </View>
          </View>
        ))
      ) : (
        <Text UNSAFE_className={styles.noDataMessage}>No records found.</Text>
      )}
    </>
  );
};

export default TableBody;
