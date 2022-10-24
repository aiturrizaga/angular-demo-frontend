import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UbigeoService } from '../../services/ubigeo.service';

@Component({
  selector: 'app-ubigeo-form',
  templateUrl: './ubigeo-form.component.html',
  styleUrls: ['./ubigeo-form.component.scss']
})
export class UbigeoFormComponent implements OnInit, OnDestroy {

  ubigeoForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
              private fb: FormBuilder,
              public ubigeoService: UbigeoService) {
  }

  ngOnInit(): void {
    this.initUbigeoForm();
  }

  navigateUbigeos() {
    this.router.navigate(['ubigeo']);
  }

  initUbigeoForm() {
    this.ubigeoForm = this.fb.group({
      id: [null],
      departamento: [''],
      provincia: [''],
      distrito: ['']
    });
    if (this.ubigeoService.ubigeoSelected) {
      this.ubigeoForm.patchValue(this.ubigeoService.ubigeoSelected);
    }
  }

  saveUbigeo() {
    if (this.ubigeoService.ubigeoSelected) {
      // Actualizar
      this.updateUbigeo();
    } else {
      // Crear
      this.createUbigeo();
    }
  }

  createUbigeo() {
    console.log('Datos ubigeo:', this.ubigeoForm.value);
    this.ubigeoService.save(this.ubigeoForm.value).subscribe(res => {
      console.log('Se guardo correctamente:', res);
      this.ubigeoForm.reset();
      this.navigateUbigeos();
    })
  }

  updateUbigeo() {
    console.log('Datos ubigeo:', this.ubigeoForm.value);
    this.ubigeoService.update(this.ubigeoForm.value).subscribe(res => {
      console.log('Se actulizo correctamente:', res);
      this.ubigeoForm.reset();
      this.navigateUbigeos();
    })
  }

  ngOnDestroy() {
    this.ubigeoService.ubigeoSelected = undefined;
  }

}
