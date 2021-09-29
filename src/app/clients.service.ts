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
     const token = JSON.parse(localStorage.getItem('access_token') || '{}');
     const headers = {
       'Authorization': 'Bearer ' + token.access_token
     }

    return this.http.post<Client>(`${this.apiURL}`, client, { headers });
   }

   updateClient(client: Client) : Observable<any> {
     return this.http.put<Client>(`${this.apiURL}/${client.idClient}`, client);
   }

   findAllClients() : Observable<Client[]> {
     const token = JSON.parse(localStorage.getItem('access_token') || '{}');
     const headers = {
       'Authorization': 'Bearer ' + token.access_token
     }
     return this.http.get<Client[]>(this.apiURL, { headers });
   }

   findByIdClient(idClient: number) : Observable<Client> {
     return this.http.get<any>(`${this.apiURL}/${idClient}`);
   }

   deleteClientById(client: Client) : Observable<any> {
     return this.http.delete<any>(`${this.apiURL}/${client.idClient}`);
   }
}
