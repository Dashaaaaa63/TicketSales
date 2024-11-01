import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITour } from 'src/app/models/ITour';

@Injectable({
  providedIn: 'root',
})
export class TicketRestService {
  constructor(private httpClient: HttpClient) {}

  getTickets(): Observable<ITour[]> {
    return this.httpClient.get<ITour[]>('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/');
  }
}
