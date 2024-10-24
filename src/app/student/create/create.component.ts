import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { StudentsService } from '../../controllers/students.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  constructor(
    private serv: StudentsService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<CreateComponent>
  ) {}
  studentForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      level: ['', [Validators.required, Validators.minLength(3)]],
      gander: ['', [Validators.required]],
    });
  }

  create() {
    console.log(this.studentForm.value);
    this.serv.post(this.studentForm.value).subscribe((data: any) => {
      this.router.navigate(['/student']);
      this.toastr.success('Student Created Successfully', 'success');
      this.dialogRef.close(true);
      this.serv.get();
    });
  }
}
