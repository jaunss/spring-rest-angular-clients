import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceProvided } from './service-provided/serviceProvided';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {

  apiURL: string = environment.apiURLBase + "/serviceProvided";

  constructor(private http: HttpClient) { }

  insertServiceProvided(serviceProvided: ServiceProvided) : Observable<ServiceProvided> {
    return this.http.post<ServiceProvided>(this.apiURL, serviceProvided);
  }
}
