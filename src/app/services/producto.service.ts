import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = 'http://localhost:8080/api/productos/get/categoria';

  constructor(private httpClient: HttpClient) { }

  getProductosByCategory(id: number): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.url}/${id}`);
  }
}
