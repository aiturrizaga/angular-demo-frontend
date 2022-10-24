import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ubigeo } from '../models/ubigeo.model';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  url: string = 'http://localhost:3000/ubigeos';

  ubigeoSelected: Ubigeo | undefined = undefined;

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(this.url);
  }

  save(ubigeo: Ubigeo) {
    return this.http.post(this.url, ubigeo);
  }

  update(ubigeo: Ubigeo) {
    return this.http.put(this.url, ubigeo);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
