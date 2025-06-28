import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonRow, IonGrid, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';


@Component({
  selector: 'productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow]
})
export class ProductosPage implements OnInit{

  listaProductos: Producto[] = [];
  nombreCategoria = '';
  idCategoria = 0;

  private productosService = inject(ProductoService);
  private categoriaService = inject(CategoriaService);
  constructor(private router: Router) {
    this.idCategoria = this.categoriaService.idCategoria();
    this.nombreCategoria = this.categoriaService.nombreCategoria();
   }

   ngOnInit(): void {
     this.cargarProductos();
   }

  cargarProductos() {
    this.productosService.getProductosByCategory(this.idCategoria).subscribe({
      next: (data) =>{console.log('lista de producto de una categoria: ',this.idCategoria, data),
         this.listaProductos = data}
    })
  }

  detalleAndCarrito(id: number):void{
    this.productosService.setIdProduco(id);
    this.router.navigate(['/detalle'])
  }

  // Método para formatear el precio
  formatearPrecio(precio: number): string {
    return `$${precio.toFixed(2)}`;
  }
}
