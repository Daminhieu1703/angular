import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {
  phones: any;
  constructor(private ps: ServiceService) { }

  ngOnInit(): void {
    this.GetAllPhones();
    
  }
  GetAllPhones() {
    this.ps.getPhones().subscribe(data => {
      this.phones = data;
    });
  }
  DeletePhoneOnly(id: number){
    this.ps.deletePhone(id).subscribe((data) => {
      this.GetAllPhones();
    });
  }
  parentChangeStatus(newStatus:number, productId:number) {
    const currentProduct = this.phones.find((product:any) =>
      product.id === productId
    );

    if (currentProduct) {
      this.ps.updatePhone(
        productId,
        {
          ...currentProduct,
          status: newStatus
        }
      ).subscribe((data) => {
        this.GetAllPhones();
      });
    }


  }
}
