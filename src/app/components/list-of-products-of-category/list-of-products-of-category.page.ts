import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCol, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonRow, IonGrid, IonLabel, IonListHeader, IonList, IonIcon, IonButton, IonItem, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Producto } from 'src/app/models/producto.model';


@Component({
  selector: 'app-list-of-products-of-category',
  templateUrl: './list-of-products-of-category.page.html',
  styleUrls: ['./list-of-products-of-category.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonItem, IonButton, IonIcon, IonList, IonListHeader, IonLabel, IonGrid, IonRow, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCol, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListOfProductsOfCategoryPage implements OnInit {

  productos: Producto[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    // JSON ficticio - después lo reemplazarás con la llamada al backend
    this.productos = [
      {
        imagen: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
        nombre: 'iPhone 15 Pro',
        precio: 999.99
      },
      {
        imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        nombre: 'Nike Air Max',
        precio: 159.99
      },
      {
        imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
        nombre: 'Audífonos Sony',
        precio: 299.99
      },
      {
        imagen: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
        nombre: 'MacBook Pro',
        precio: 1999.99
      },
      {
        imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
        nombre: 'Reloj Inteligente',
        precio: 249.99
      }
    ];
  }

  // Método para formatear el precio
  formatearPrecio(precio: number): string {
    return `$${precio.toFixed(2)}`;
  }
}
