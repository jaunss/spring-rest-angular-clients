import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from 'src/app/clients/clients-form/clients';
import { ServiceProvidedService } from 'src/app/service-provided.service';
import { ServiceProvided } from '../serviceProvided';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {

  clients: Client[] = [];
  service: ServiceProvided;
  success: boolean = false;
  errors: String[] = [];

  constructor(
    private clientService : ClientsService,
    private serviceProvided : ServiceProvidedService
    ) {
      this.service = new ServiceProvided();
    }

  ngOnInit(): void {
    this.clientService
    .findAllClients()
    .subscribe(response => this.clients = response);
  }

  onSubmit() {
    this.serviceProvided.insertServiceProvided(this.service)
    .subscribe(response => {
      this.success = true;
      this.errors = [];
      this.service = new ServiceProvided();
  }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    });
  }
}
