import { inject, Injectable } from '@angular/core';
import { Student } from '../models/student.type';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.type';

@Injectable({
  providedIn: 'root'
})
export class Students {
  http = inject(HttpClient);

  getAllStudents() {
    return this.http.get<Student[]>('http://localhost:3000/students')
  }

  addStudent(student: Student) {
    return this.http.post<Student>('http://localhost:3000/students', student);
  }

  deleteStudent(studentId: string) {
    return this.http.delete(`http://localhost:3000/students/${studentId}`);
  }

  getOneStudent(studentId: string) {
    return this.http.get<Student>(`http://localhost:3000/students/${studentId}`);
  }

  updateStudentCourses(studentId: string, courses: Course[]) {
    return this.http.patch<Student>(`http://localhost:3000/students/${studentId}`, { courses });
  }
}
