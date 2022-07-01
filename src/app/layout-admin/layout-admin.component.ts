import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {
  admin:any;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.admin = localStorage.getItem('admin');
    this.admin = JSON.parse(this.admin);
    if(this.admin == null){
      alert("Bạn chưa đăng nhập, mời bạn đăng nhập !")
      this.router.navigate(['login']);
    }else if (this.admin.role == 1) {
      alert("Bạn không đủ quyền để truy cập vào trang quản trị !")
      this.router.navigate(['login']);
    }
  }

}
