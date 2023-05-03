import React from "react";

import {
  Button,
  Dialog,
  Heading,
  TextField,
  Form,
  Divider,
  Content,
  ButtonGroup,
  View,
} from "@adobe/react-spectrum";

import styles from "./EditStudentModal.module.css";
import { EditStudentModalProps } from "./types";

const EditStudentModal = ({
  selectedStudent,
  setSelectedStudent,
  saveStudent,
}: EditStudentModalProps) => {
  const handleProgressChange = (value: string) => {
    const progress = parseInt(value, 10);
    const clampedProgress = isNaN(progress) ? 0 : Math.min(progress, 100);
    setSelectedStudent({ ...selectedStudent, progress: clampedProgress });
  };

  return (
    <View UNSAFE_className={styles.modalWrapper}>
      <View UNSAFE_className={styles.modalOverlay} />
      <View UNSAFE_className={styles.modal}>
        <Dialog>
          <Heading>Edit Student</Heading>
          <Divider />
          <Content>
            <Form>
              <TextField
                label="Name"
                value={selectedStudent.name}
                onChange={(value) =>
                  setSelectedStudent({ ...selectedStudent, name: value })
                }
              />
              <TextField
                label="Course"
                value={selectedStudent.course}
                onChange={(value) =>
                  setSelectedStudent({ ...selectedStudent, course: value })
                }
              />
              <TextField
                label="Lesson"
                value={selectedStudent.lesson}
                onChange={(value) =>
                  setSelectedStudent({ ...selectedStudent, lesson: value })
                }
              />
              <TextField
                label="Progress"
                value={selectedStudent.progress.toString()}
                onChange={handleProgressChange}
              />
            </Form>
          </Content>
          <ButtonGroup>
            <Button
              variant="secondary"
              onPress={() => setSelectedStudent(null)}
            >
              Cancel
            </Button>
            <Button
              variant="cta"
              onPress={() => {
                saveStudent(selectedStudent);
                setSelectedStudent(null);
              }}
            >
              Save
            </Button>
          </ButtonGroup>
        </Dialog>
      </View>
    </View>
  );
};

export default EditStudentModal;
