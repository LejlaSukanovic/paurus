import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Students } from '../../services/students';
import { Student } from '../../models/student.type';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    InputTextModule,
    DatePickerModule,
    ButtonModule,
    InputNumberModule,
    CardModule,
    DividerModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './student-add-form.html',
  styleUrl: './student-add-form.css',
})
export class StudentAddForm {
  private fb = inject(FormBuilder);
  private studentService = inject(Students);
  private router = inject(Router);
  messageService = inject(MessageService);

  studentForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    address: [''],
    enrollmentDate: ['', Validators.required],
    major: [''],
    courses: this.fb.array([]),
  });

  get courses(): FormArray {
    return this.studentForm.get('courses') as FormArray;
  }

  addCourse() {
    const courseGroup = this.fb.group({
      title: ['', Validators.required],
      credits: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    });
    this.courses.push(courseGroup);
  }

  removeCourse(i: number) {
    this.courses.removeAt(i);
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const student: Student = this.studentForm.value;
    this.studentService.addStudent(student).subscribe({
      next: (addedStudent) => {
       this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Student added successfully!',
          life: 3000
        });
        // Delay navigation to allow toast to show
        setTimeout(() => {
          this.router.navigate(['/overview']);
        }, 2500);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add student. Please try again.',
          life: 5000
        });
      },
    });
  }
}
