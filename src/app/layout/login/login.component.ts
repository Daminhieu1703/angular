import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  thisUser:any;
  local: any;
  constructor(
    private ProductService: ServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { 
    this.user = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
      role: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }
  login(user:any){
    this.ProductService.getUser(user.email).subscribe(data =>{
      this.thisUser = data;
      if (this.thisUser[0] === undefined) {
        alert("tài khoản không tồn tại !")
      }else if(this.thisUser[0].password !== user.password){
        alert("Mật khẩu không đúng !")
      }else if(this.thisUser[0].password === user.password && this.thisUser[0].role === 1){
        this.local = localStorage.getItem('user');
        if (this.local == null) {
          this.local = {};
        } else {
          this.local = JSON.parse(this.local);
        }
        this.local = this.thisUser[0];
        localStorage.setItem('user', JSON.stringify(this.local));
        this.router.navigate(['home']);
      }else if(this.thisUser[0].password === user.password && this.thisUser[0].role === 2){
        this.local = localStorage.getItem('admin');
        if (this.local == null) {
          this.local = {};
        } else {
          this.local = JSON.parse(this.local);
        }
        this.local = this.thisUser[0];
        localStorage.setItem('admin', JSON.stringify(this.local));
        this.router.navigate(['admin']);
      }
    });
  }
  register(user:any){
    user.role = 1;
    if (user.name == "" || user.email == "" || user.password == "") {
      alert("Bạn điền thiếu thông tin !");
      return;
    }
    this.ProductService.createUser(user).subscribe(data =>{
      alert("Bạn đăng ký thành công !")
      window.location.reload();
      this.router.navigate(['login']);
    });
  }
}
