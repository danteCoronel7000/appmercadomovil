import { computed, Injectable, signal } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = 'http://localhost:8080/api/categorias/get';

  #idCategoria = signal<number>(0);
  idCategoria = computed(()=>this.#idCategoria());

  #nombreCategoria = signal<string>('');
  nombreCategoria = computed(() => this.#nombreCategoria());

  constructor(private httpClient: HttpClient) { }

  public setIdCategoria(value: number):void{
    this.#idCategoria.set(value);
  }

  public setNombreCategoria(value: string): void{
    this.#nombreCategoria.set(value);
  }

   getCategory(): Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(this.url);
  }
}
