import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = 'http://localhost:8080/api/productos/get';
  #idProducto = signal<number>(0);
  idProducto = computed(() => this.#idProducto());


  constructor(private httpClient: HttpClient) { }

  public setIdProduco(value: number): void{
    this.#idProducto.set(value);
  }

  getAllProductosDto(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.url}/all/dto`)
  }

  getProductoById(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.url}/producto/${id}`);
  }

  getProductosByCategory(id: number): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.url}/categoria/${id}`);
  }
}
