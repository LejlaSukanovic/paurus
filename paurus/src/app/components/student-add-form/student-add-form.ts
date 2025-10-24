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
  ],
  templateUrl: './student-add-form.html',
  styleUrl: './student-add-form.css',
})
export class StudentAddForm {
  private fb = inject(FormBuilder);
  private studentService = inject(Students);

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
        console.log('✅ Student added successfully:', addedStudent);
        //redirect to overview page
        window.location.href = '/overview';
      },
      error: (err) => console.error('❌ Error adding student:', err),
    });
  }
}
