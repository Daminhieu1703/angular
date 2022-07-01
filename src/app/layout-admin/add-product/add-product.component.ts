import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  Product: FormGroup;
  editProduct: any;
  id:any
  imageBase64: any;
  phones: any;
  sectors: any;
  constructor(
    private ProductService: ServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.Product = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]),
      price: new FormControl('',[Validators.required,Validators.min(1)]),
      desc: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(32)]),
      img: new FormControl('',Validators.required),
      status: new FormControl('',Validators.required),
      SectorId: new FormControl('',Validators.required),
    });
   }

  ngOnInit(): void {
    this.GetAllSectors();
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id !== undefined) {
      this.ProductService.getPhone(this.id).subscribe(data => {
        this.editProduct = data;
        this.keepImage(this.editProduct.img);
      })
    }else{
      this.editProduct = {
        img: '',
        desc: '',
        price: 0,
        name:'',
        status: 0,
        SectorId: 0,
      };
    }
  }
  GetAllPhones() {
    this.ProductService.getPhones().subscribe(data => {
      this.phones = data;
    });
  }
  GetAllSectors() {
    this.ProductService.getSectors().subscribe(data => {
      this.sectors = data;
    });
  }
  changeImage(event: any) {
      // 1. Định nghĩa việc đọc file
      const reader = new FileReader();
      // 2. Định nghĩa quá trình đọc file
      reader.onload = (e) => {
        this.imageBase64 = e.target?.result;
      };
      // 3. Đọc file lấy từ input
      reader.readAsDataURL(event.target.files[0]); 
  }
  keepImage(event: any) {
     this.imageBase64 = event;
  }
  onSubmit(obj:any) {
    obj = { 
      ...obj,
      img: this.imageBase64,
      status: Number(obj.status),
      SectorId: Number(obj.SectorId)
    }
    
    if (this.id) {
      this.ProductService.updatePhone(this.id, obj).subscribe(data =>{
        this.GetAllPhones();
        return this.router.navigate(['admin/products']);
      });
    }else{
      this.ProductService.createPhone(obj).subscribe(data =>{
        this.GetAllPhones();
        return this.router.navigate(['admin/products']);
      });
    }
  }
}
