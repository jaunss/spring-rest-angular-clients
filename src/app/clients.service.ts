import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './clients/clients-form/clients';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  apiURL: string = environment.apiURLBase + '/client';

  constructor(private http: HttpClient) {}

   insertClient(client: Client) : Observable<Client> {
    return this.http.post<Client>(`${this.apiURL}`, client);
   }

   updateClient(client: Client) : Observable<any> {
     return this.http.put<Client>(`${this.apiURL}/${client.idClient}`, client);
   }

   findAllClients() : Observable<Client[]> {
     return this.http.get<Client[]>(this.apiURL);
   }

   findByIdClient(idClient: number) : Observable<Client> {
     return this.http.get<any>(`${this.apiURL}/${idClient}`);
   }

   deleteClientById(client: Client) : Observable<any> {
     return this.http.delete<any>(`${this.apiURL}/${client.idClient}`);
   }
}
