import { Course } from "./course.type";

export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phone?: string;
  address?: string;
  enrollmentDate: Date;
  major?: string;
  courses? : Course[];
};