import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [NewTicketComponent, TicketComponent]
})
export class TicketsComponent {

    tickets: Ticket[] = [];

    onAdd(ticketData: { title: string, text: string }) {
        this.tickets.push({
            id: Math.random().toString(),
            title: ticketData.title,
            request: ticketData.text,
            status: 'open',
        })
    }

    onCloseTicket(id: string) {
        this.tickets = this.tickets.map((ticket) => {
            if (ticket.id === id) {
                return {
                    ...ticket,
                    status: 'closed'
                }
            }
            return ticket;
        });

    }
}
