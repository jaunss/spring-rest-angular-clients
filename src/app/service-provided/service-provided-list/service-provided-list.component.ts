import { Component, OnInit } from '@angular/core';
import { ServiceProvidedService } from 'src/app/service-provided.service';
import { FindServiceProvided } from './findServiceProvided';

@Component({
  selector: 'app-service-provided-list',
  templateUrl: './service-provided-list.component.html',
  styleUrls: ['./service-provided-list.component.css']
})
export class ServiceProvidedListComponent implements OnInit {

  name!: string;
  month!: number;
  months: number[];
  listService: FindServiceProvided[] = [];
  message!: string;

  constructor(
    private service: ServiceProvidedService
  ) {
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {
  }

  consult() {
    this.service.findService(this.name, this.month)
      .subscribe(response => {
        this.listService = response
        if (this.listService.length <= 0) {
          this.message = "No records found.";
        } else {
          this.message = "";
        }
      });
  }
}
