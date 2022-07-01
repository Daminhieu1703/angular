import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-add-sector',
  templateUrl: './add-sector.component.html',
  styleUrls: ['./add-sector.component.css']
})
export class AddSectorComponent implements OnInit {
  Sector: FormGroup;
  id:any
  editSector: any;
  constructor(
    private ProductService: ServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.Sector = new FormGroup({
      name: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id !== undefined) {
      this.ProductService.getSector(this.id).subscribe(data => {
        this.editSector = data;
      })
    }else{
      this.editSector = {
        name: ''
      };
    }
  }
  onSubmit(obj:any) {
    if (this.id) {
      this.ProductService.updateSector(this.id, obj).subscribe(data =>{
        return this.router.navigate(['admin/sectors']);
      });
    }else{
      this.ProductService.createSector(obj).subscribe(data =>{
        return this.router.navigate(['admin/sectors']);
      });
    }
  }
}
