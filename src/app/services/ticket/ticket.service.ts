import { Injectable } from '@angular/core';
import { TicketRestService } from '../rest/ticket-rest.service';
import { Observable } from 'rxjs';
import { ITour } from 'src/app/models/ITour';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private ticketRestService: TicketRestService) { }

  getTickets(): Observable<ITour[]> {
    return this.ticketRestService.getTickets();
  }
}
