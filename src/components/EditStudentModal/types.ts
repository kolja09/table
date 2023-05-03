import { Dispatch, SetStateAction } from "react";

import { Student } from "@/types/students";

export interface EditStudentModalProps {
    saveStudent: (updatedStudent: Student) => void;
    selectedStudent: Student;
    setSelectedStudent: Dispatch<SetStateAction<Student | null>>;
  }