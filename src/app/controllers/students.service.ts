import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';
import { Student } from '../models/students';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService extends ApiFunctionsService<Student> {
  constructor(protected override http: HttpClient) {
    super('https://webapi.elhossiny.net/api/student', http);
  }
 

}
