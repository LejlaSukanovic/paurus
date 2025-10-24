import { Component, inject, input, output, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Student } from '../../models/student.type';
import { DatePipe } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { Students } from '../../services/students';
import { RouterLink } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-students-table',
  imports: [RouterLink, TableModule, TagModule, DatePipe, TooltipModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, ToastModule],
  providers: [MessageService],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css',
})
export class StudentsTable {
  students = input<Student[]>([]);
  studentService = inject(Students);
  messageService = inject(MessageService);
  deletedStudentId = output<string>();

  deleteStudent(studentId: string) {
    this.studentService.deleteStudent(studentId).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Student deleted successfully!',
          life: 3000
        });
        this.deletedStudentId.emit(studentId);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to delete student. Please try again.',
          life: 5000
        });
        console.error('Error deleting student:', err);
      }
    });
  }
  
}
