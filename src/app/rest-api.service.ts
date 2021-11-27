import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const apiUrl = 'http://api.zippopotam.us/';

@Injectable({
  providedIn: 'root',
})

export class RestApiService {

  constructor(private http: HttpClient) { }
}
