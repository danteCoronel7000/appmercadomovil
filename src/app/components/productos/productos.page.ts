import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonRow, IonGrid, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router, RouterLink } from '@angular/router';
import { arrowBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ProductoSocketService } from 'src/app/services/producto.socket.service';


@Component({
  selector: 'productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [RouterLink, IonCardContent, IonButtons, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow, IonIcon]
})
export class ProductosPage implements OnInit {

  listaProductos: Producto[] = [];
  nombreCategoria = '';
  idCategoria = 0;

  private productosService = inject(ProductoService);
  private categoriaService = inject(CategoriaService);
  productoSocketService = inject(ProductoSocketService);
  constructor(private router: Router) {
    addIcons({ arrowBackOutline });
  }

  ngOnInit(): void {}

  ionViewWillEnter() {
    // 🔁 Esto se ejecuta cada vez que la vista vuelve a mostrarse
    this.idCategoria = this.categoriaService.idCategoria();
    this.nombreCategoria = this.categoriaService.nombreCategoria();
    this.cargarProductos();
    this.getNewProductByWebSocket();
  }

  cargarProductos() {
    this.productosService.getProductosByCategory(this.idCategoria).subscribe({
      next: (data) => {
        console.log('lista de producto de una categoria: ', this.idCategoria, data),
        this.listaProductos = data
      }
    })
  }

  getNewProductByWebSocket(): void {
  this.productoSocketService.productoActualizado$.subscribe(producto => {
    console.log('nuevo producto recibido', producto);
      const index = this.listaProductos.findIndex(p => p.id === producto.id);//recorremos la lista actual de productos comparando si alngun id de la lista actual coincide con el id del nuevo producto creado

    if (index !== -1) {
      // Ya existe → lo actualizamos
      this.listaProductos[index] = producto;
    } else {
      // No existe → lo agregamos al final
      this.listaProductos.push(producto);
    }
  });
}

  detalleAndCarrito(id: number): void {
    this.productosService.setIdProduco(id);
    this.router.navigate(['/detalle'])
  }

  // Método para formatear el precio
  formatearPrecio(precio: number): string {
    return `$${precio.toFixed(2)}`;
  }
}
