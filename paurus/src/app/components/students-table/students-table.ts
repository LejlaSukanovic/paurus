import { Component, input, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Student } from '../../models/student.type';
import { DatePipe } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-students-table',
  imports: [TableModule, TagModule, DatePipe, TooltipModule, ButtonModule],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css',
})
export class StudentsTable {
  students = input<Student[]>([]);
  
}
