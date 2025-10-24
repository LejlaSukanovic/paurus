import { Component, inject, input, signal } from '@angular/core';
import { Course } from '../../models/course.type';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Students } from '../../services/students';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-student-edit-form',
  imports: [TagModule, ButtonModule, CommonModule, FormsModule, InputNumberModule, ToastModule],
  providers: [MessageService],
  templateUrl: './student-edit-form.html',
  styleUrl: './student-edit-form.css',
})
export class StudentEditForm {
  studentId = input<string>('');
  courses = input<Course[]>([]);
  isEditing = signal(false);
  studentService = inject(Students);
  messageService = inject(MessageService);

  toggleEdit(isEditing: boolean) {
    this.isEditing.set(isEditing);
  }

  addCourse() {
    this.courses().push({ id: '', title: '', credits: 0 });
  }

  removeCourse(index: number) {
    this.courses().splice(index, 1);
  }

  saveCourses() {
    return this.studentService.updateStudentCourses(this.studentId(),this.courses()).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Student courses updated successfully!',
          life: 3000
        });
        this.toggleEdit(false);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to update student courses. Please try again.',
          life: 5000
        });
      },
    });
  }
}
