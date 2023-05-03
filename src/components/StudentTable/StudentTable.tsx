import React, { useState } from "react";
import { Flex, Heading } from "@adobe/react-spectrum";

import { Student } from "@/types/students";

import EditStudentModal from "../EditStudentModal/EditStudentModal";
import Table from "../Table/Table";

import { StudentTableProps, TableStateProps } from "./types";
import styles from "./StudentTable.module.css";

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const [sortedStudents, setSortedStudents] = useState<Student[]>(students);
  const [tableState, setTableState] = useState<TableStateProps>({
    currentPage: 1,
    sortOrder: "asc",
    itemsPerPage: 5,
    sortBy: "name",
  });
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const openEditDialog = (student: Student) => {
    setSelectedStudent(student);
  };

  const deleteStudent = (studentId: number) => {
    const updatedStudents = sortedStudents.filter(
      (student) => student.id !== studentId
    );
    setSortedStudents(updatedStudents);
  };

  const saveStudent = (updatedStudent: Student) => {
    const updatedStudents = sortedStudents.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setSortedStudents(updatedStudents);
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      UNSAFE_className={styles.tableWrapper}
    >
      <Flex justifyContent="space-between" width="100%">
        <Heading marginBottom={20} marginTop={10} level={1}>
          Student Progress
        </Heading>
      </Flex>
      <Table
        setSortedTableData={setSortedStudents}
        sortedTableData={sortedStudents}
        tableState={tableState}
        setTableState={setTableState}
        openEditDialog={openEditDialog}
        deleteItem={deleteStudent}
      />
      {selectedStudent && (
        <EditStudentModal
          saveStudent={saveStudent}
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
        />
      )}
    </Flex>
  );
};

export default StudentTable;
