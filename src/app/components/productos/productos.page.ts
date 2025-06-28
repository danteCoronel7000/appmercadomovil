import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonRow, IonGrid, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';


@Component({
  selector: 'productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow]
})
export class ProductosPage implements OnInit {

  listaProductos: Producto[] = [];
  nombreCategoria = '';
  idCategoria = 0;

  private productosService = inject(ProductoService);
  private categoriaService = inject(CategoriaService);
  constructor() {
    this.idCategoria = this.categoriaService.idCategoria();
    this.nombreCategoria = this.categoriaService.nombreCategoria();
   }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductosByCategory(this.idCategoria).subscribe({
      next: (data) =>{console.log('lista de producto de una categoria: ',this.idCategoria, data),
         this.listaProductos = data}
    })
  }

  // Método para formatear el precio
  formatearPrecio(precio: number): string {
    return `$${precio.toFixed(2)}`;
  }
}
