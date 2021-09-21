import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientsService } from 'src/app/clients.service';
import { Client } from './clients';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success: boolean = false;
  errors: String[] = [];
  idClient!: number;

  constructor(
    private service: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.client = new Client();
   }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params;
    if (params && params.value && params.value.idClient) {
      this.idClient = params.value.idClient;
      this.service.findByIdClient(this.idClient).subscribe(response => this.client = response,
        errrorResponse => this.client = new Client());
    }
  }

  returnList() {
    this.router.navigate(['/clients-list']);
  }

  onSubmit() {
    if (this.idClient) {
      this.service.updateClient(this.client).subscribe(response => {
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.errors = ['Error updating client.']
      })
    } else {
        this.service.insertClient(this.client).subscribe(response => {
          this.success = true;
          this.errors = [];
          this.client = response;
      }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
      }
  }
}
