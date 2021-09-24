import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../clients-form/clients';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Client[] = [];
  clientSelection!: Client;
  messageSuccess!: string;
  messageError!: string;

  constructor(
    private service: ClientsService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.service.findAllClients().subscribe(resposta => this.clients = resposta);
  }

  newRegister() {
    this.router.navigate(['/clients/form']);
  }

  prepareDeletion(client: Client) {
    this.clientSelection = client;
  }

  deleteClient() {
    this.service.deleteClientById(this.clientSelection)
    .subscribe(
      response => { 
        this.messageSuccess = 'Customer successfully removed.' 
        this.ngOnInit();
      },
      error => this.messageError = 'An error occurred while trying to remove the client.'
      )
  }
}
