import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  admin:any;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.admin = localStorage.getItem('admin');
    this.admin = JSON.parse(this.admin);
  }
  logout(){
    localStorage.removeItem("admin");
    return this.router.navigate(['home']);
  }
}
