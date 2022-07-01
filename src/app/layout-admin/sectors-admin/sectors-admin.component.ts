import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-sectors-admin',
  templateUrl: './sectors-admin.component.html',
  styleUrls: ['./sectors-admin.component.css']
})
export class SectorsAdminComponent implements OnInit {
  sectors: any;
  constructor(private ps: ServiceService) { }

  ngOnInit(): void {
    this.GetAllSectors();
  }
  GetAllSectors() {
    this.ps.getSectors().subscribe(data => {
      this.sectors = data;
    });
  }
  deleteSectorOnly(id: number){
    this.ps.deleteSector(id).subscribe((data) => {
      this.GetAllSectors();
    });
  }
}
