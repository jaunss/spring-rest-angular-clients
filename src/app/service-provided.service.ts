import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceProvided } from './service-provided/serviceProvided';
import { environment } from 'src/environments/environment';
import { FindServiceProvided } from './service-provided/service-provided-list/findServiceProvided';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {

  apiURL: string = environment.apiURLBase + "/serviceProvided";

  constructor(private http: HttpClient) { }

  insertServiceProvided(serviceProvided: ServiceProvided) : Observable<ServiceProvided> {
    return this.http.post<ServiceProvided>(this.apiURL, serviceProvided);
  }

  findService(name: string, month: number) : Observable<FindServiceProvided[]> {

    const httpParams = new HttpParams()
    .set("name", name)
    .set("month", month ? month.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }
}
