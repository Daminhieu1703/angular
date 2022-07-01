import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id:any;
  chuoi: any;
  myCart: any;
  total_products = 0;
  productInCart: any;
  constructor(
    private ProductService: ServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.loadCart();
  }
  loadCart(){
    this.myCart = localStorage.getItem('myCart');
    this.myCart = JSON.parse(this.myCart);
    this.chuoi = '';
    for (const x of Object.keys(this.myCart)) {
      if (this.chuoi.length > 0) 
      this.chuoi += '&'
      this.chuoi += 'id=' + x
    }
    this.ProductService.getPhoneCart(this.chuoi).subscribe(data => {
      this.productInCart = data;
      for (let i = 0; i < this.productInCart.length; i++) {
        this.total_products += this.productInCart[i].price
        this.productInCart[i].quantity = this.myCart[this.productInCart[i].id]
      }
    })
  }
  remove_all() {
    localStorage.removeItem("myCart");
    return this.router.navigate(['../products']);
  }
  remove_only(id: number) {
    this.myCart = localStorage.getItem('myCart');
    this.myCart = JSON.parse(this.myCart);
    delete this.myCart[id];
    if (Object.keys(this.myCart).length === 0) {
      this.remove_all();
      return;
    }
    localStorage.setItem('myCart', JSON.stringify(this.myCart));
    this.loadCart();
  }
}
