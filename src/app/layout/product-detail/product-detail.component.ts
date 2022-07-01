import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id:any
  ProductDetail: any;
  myCart: any;
  constructor(
    private ProductService: ServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.ProductService.getPhone(this.id).subscribe(data => {
      this.ProductDetail = data;
    })
  }
  order(id: number){
    this.myCart = localStorage.getItem('myCart');
    if (this.myCart == null) {
      this.myCart = {};
  } else {
    this.myCart = JSON.parse(this.myCart);
  }
    if (this.myCart[id] != null) {
      this.myCart[id] = this.myCart[id]+1;
    } else {
      this.myCart[id] = 1;
    }
    localStorage.setItem('myCart', JSON.stringify(this.myCart));
    return this.router.navigate(['../cart']);
  }

}
