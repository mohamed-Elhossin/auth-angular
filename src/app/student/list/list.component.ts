import { Component } from '@angular/core';
import { StudentsService } from '../../controllers/students.service';
import { Student } from '../../models/students';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  allData!: Student[];
  constructor(private serv: StudentsService, private dialog: MatDialog) {
    this.loadStudent();
  }
  loadStudent() {
  this.serv.get().subscribe((data: any) => {
    this.allData = data.Data;
    console.log(data.Data[0].id);
  });
}
  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadStudent();
      }
    });
  }
}
