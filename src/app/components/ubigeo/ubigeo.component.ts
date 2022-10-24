import { Component, OnInit } from '@angular/core';
import { UbigeoService } from '../../services/ubigeo.service';
import { Router } from '@angular/router';
import { Ubigeo } from '../../models/ubigeo.model';

@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.component.html',
  styleUrls: ['./ubigeo.component.scss']
})
export class UbigeoComponent implements OnInit {

  ubigeos: any[] = [];

  constructor(private ubigeoService: UbigeoService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.ubigeoService.findAll().subscribe((res: any) => {
      console.log(res);
      this.ubigeos = res;
    })
  }

  navigateForm() {
    this.router.navigate(['ubigeo-form']);
  }

  editarUbigeo(ubigeo: Ubigeo) {
    this.ubigeoService.ubigeoSelected = ubigeo;
    this.navigateForm();
  }

  deleteUbigeo(id: string) {
    this.ubigeoService.delete(id).subscribe(res => {
      console.log('Se elimino el ubigeo:', res);
      this.findAll();
    })
  }

}
