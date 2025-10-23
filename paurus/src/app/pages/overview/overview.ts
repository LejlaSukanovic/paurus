import { Component } from '@angular/core';
import { StudentsTable } from '../../components/students-table/students-table';

@Component({
  selector: 'app-overview',
  imports: [StudentsTable],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {

}
