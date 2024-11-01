import { ITour } from 'src/app/models/ITour';
import { TicketService } from './../../../services/ticket/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  tickets: ITour[];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((data) => {
      this.tickets = data;
    });
  }
}
