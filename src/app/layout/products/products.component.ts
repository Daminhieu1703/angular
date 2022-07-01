import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  phones: any;
  constructor(private ps: ServiceService) { }

  ngOnInit(): void {
    AOS.init();
    this.GetAllPhones();
    
  }
  GetAllPhones() {
    this.ps.getPhones().subscribe(data => {
      this.phones = data;
    });
  }
}
