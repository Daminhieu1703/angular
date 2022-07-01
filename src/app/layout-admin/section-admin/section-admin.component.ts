import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-admin',
  templateUrl: './section-admin.component.html',
  styleUrls: ['./section-admin.component.css']
})
export class SectionAdminComponent implements OnInit {
  admin:any;
  constructor() { }

  ngOnInit(): void {
    this.admin = localStorage.getItem('admin');
    this.admin = JSON.parse(this.admin);
  }

}
