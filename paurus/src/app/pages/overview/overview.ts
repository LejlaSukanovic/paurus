import { Component, inject, OnInit, signal } from '@angular/core';
import { StudentsTable } from '../../components/students-table/students-table';
import { Students } from '../../services/students';
import { Student } from '../../models/student.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-overview',
  imports: [StudentsTable],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview implements OnInit {
  studentService = inject(Students)
  allStudents = signal<Student[]>([]);

  ngOnInit() {
    this.studentService.getAllStudents()
      .pipe(
        catchError((err) => {
          console.error('Error fetching students', err);
          return [];
        })
      )
      .subscribe(students => {
        this.allStudents.set(students);
      });
  }

  onStudentDeleted(studentId: string) {
    this.allStudents.update(students =>
      students.filter(s => s.id !== studentId)
    );
  }

}
