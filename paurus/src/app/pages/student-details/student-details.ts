import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Students } from '../../services/students';
import { Student } from '../../models/student.type';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StudentEditForm } from "../../components/student-edit-form/student-edit-form";

@Component({
  selector: 'app-student-details',
  imports: [CardModule, TagModule, CommonModule, ButtonModule, StudentEditForm],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private studentService = inject(Students);

  student = signal<Student | null>(null);

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.studentService.getOneStudent(studentId).subscribe(
        (data) => this.student.set(data),
        (error) => console.error('Error fetching student details:', error)
      );
    }
  }
}
