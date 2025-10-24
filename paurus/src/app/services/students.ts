import { inject, Injectable } from '@angular/core';
import { Student } from '../models/student.type';
import { HttpClient } from '@angular/common/http';

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
}
