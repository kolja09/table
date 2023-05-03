import { GetServerSideProps } from "next";

import StudentTable from "@/components/StudentTable/StudentTable";

import { Student } from "@/types/students";


interface HomePageProps {
  students: Student[];
}

const HomePage: React.FC<HomePageProps> = ({ students }) => {
  return <StudentTable students={students} />;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/students`);
  const students: Student[] = await response.json();

  return {
    props: {
      students,
    },
  };
};
