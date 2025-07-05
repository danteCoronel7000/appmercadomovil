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


@Component({
  selector: 'productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [RouterLink, IonCardContent, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow, IonIcon]
})
export class ProductosPage implements OnInit {

  listaProductos: Producto[] = [];
  nombreCategoria = '';
  idCategoria = 0;

  private productosService = inject(ProductoService);
  private categoriaService = inject(CategoriaService);
  constructor(private router: Router) {
    addIcons({ arrowBackOutline });
  }

  ngOnInit(): void {}

  ionViewWillEnter() {
    // 🔁 Esto se ejecuta cada vez que la vista vuelve a mostrarse
    this.idCategoria = this.categoriaService.idCategoria();
    this.nombreCategoria = this.categoriaService.nombreCategoria();
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductosByCategory(this.idCategoria).subscribe({
      next: (data) => {
        console.log('lista de producto de una categoria: ', this.idCategoria, data),
        this.listaProductos = data
      }
    })
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
