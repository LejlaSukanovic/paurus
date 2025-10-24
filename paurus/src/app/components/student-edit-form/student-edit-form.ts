import { Component, input, signal } from '@angular/core';
import { Course } from '../../models/course.type';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-student-edit-form',
  imports: [TagModule, ButtonModule, CommonModule, FormsModule, InputNumberModule],
  templateUrl: './student-edit-form.html',
  styleUrl: './student-edit-form.css',
})
export class StudentEditForm {
  courses = input<Course[]>([]);
  isEditing = signal(false);

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
    console.log('Courses saved:', this.courses());
    this.toggleEdit(false);
  }
}
