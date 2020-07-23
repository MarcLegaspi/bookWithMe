import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {
  constructor(private http: HttpClient) {

  }

  getRental(): Observable<Rental[]> {
    return this.http.get<Rental[]>('/api/v1/rentals');
  }

  getRentalById(id: string): Observable<Rental> {
    return this.http.get<Rental>('/api/v1/rentals/' + id);
  }
}
