import { Component } from '@angular/core';
import { StudentAddForm } from '../../components/student-add-form/student-add-form';

@Component({
  selector: 'app-add-student',
  imports: [StudentAddForm],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {

}
