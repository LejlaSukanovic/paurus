import { Component, signal } from '@angular/core';
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
  students = signal<Student[]>([
    {
      id: 'UMFERI1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      dateOfBirth: new Date(2001, 5, 22),
      enrollmentDate: new Date(2019, 8, 1),
      major: 'Computer Science',
      courses: [{ id: 'C1', title: 'Mathematics', credits: 3 }, { id: 'C2', title: 'OOP', credits: 4 }]
    },
    {
      id: 'UMFERI2',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      dateOfBirth: new Date(2000, 3, 14),
      enrollmentDate: new Date(2018, 8, 1),
      major: 'Biology',
      courses: [{ id: 'C3', title: 'Biology 101', credits: 4 }, { id: 'C4', title: 'Chemistry', credits: 3 }, { id: 'C12', title: 'Physics', credits: 3 }]
    }
    ,
    {
      id: 'UMFERI3',
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
      dateOfBirth: new Date(2002, 1, 10),
      enrollmentDate: new Date(2020, 8, 1),
      major: 'Mathematics',
      courses: [{ id: 'C5', title: 'Calculus', credits: 4 }]
    },
    {
      id: 'UMFERI4',
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob.johnson@example.com',
      dateOfBirth: new Date(1999, 11, 5),
      enrollmentDate: new Date(2017, 8, 1),
      major: 'Physics',
      courses: [{ id: 'C6', title: 'Mechanics', credits: 3 }]
    },
    {
      id: 'UMFERI5',
      firstName: 'Carlos',
      lastName: 'Garcia',
      email: 'carlos.garcia@example.com',
      dateOfBirth: new Date(2001, 6, 30),
      enrollmentDate: new Date(2019, 8, 1),
      major: 'Economics',
      courses: [{ id: 'C7', title: 'Microeconomics', credits: 3 }]
    },
    {
      id: 'UMFERI6',
      firstName: 'Diana',
      lastName: 'Lee',
      email: 'diana.lee@example.com',
      dateOfBirth: new Date(2003, 2, 20),
      enrollmentDate: new Date(2021, 8, 1),
      major: 'Chemistry',
      courses: [{ id: 'C4', title: 'Chemistry', credits: 3 }]
    },
    {
      id: 'UMFERI7',
      firstName: 'Ethan',
      lastName: 'Brown',
      email: 'ethan.brown@example.com',
      dateOfBirth: new Date(2000, 9, 12),
      enrollmentDate: new Date(2018, 8, 1),
      major: 'Information Systems',
      courses: [{ id: 'C2', title: 'OOP', credits: 4 }]
    },
    {
      id: 'UMFERI8',
      firstName: 'Fiona',
      lastName: 'Wong',
      email: 'fiona.wong@example.com',
      dateOfBirth: new Date(2002, 4, 3),
      enrollmentDate: new Date(2020, 8, 1),
      major: 'Design',
      courses: [{ id: 'C8', title: 'Graphic Design', credits: 3 }]
    },
    {
      id: 'UMFERI9',
      firstName: 'George',
      lastName: 'Miller',
      email: 'george.miller@example.com',
      dateOfBirth: new Date(1998, 7, 25),
      enrollmentDate: new Date(2016, 8, 1),
      major: 'History',
      courses: [{ id: 'C9', title: 'World History', credits: 3 }]
    },
    {
      id: 'UMFERI10',
      firstName: 'Hannah',
      lastName: 'Davis',
      email: 'hannah.davis@example.com',
      dateOfBirth: new Date(2001, 10, 8),
      enrollmentDate: new Date(2019, 8, 1),
      major: 'English',
      courses: [{ id: 'C10', title: 'Literature', credits: 3 }]
    },
    {
      id: 'UMFERI11',
      firstName: 'Ian',
      lastName: 'Clark',
      email: 'ian.clark@example.com',
      dateOfBirth: new Date(2000, 0, 2),
      enrollmentDate: new Date(2018, 8, 1),
      major: 'Philosophy',
      courses: [{ id: 'C11', title: 'Logic', credits: 3 }]
    }
  ]);
}
