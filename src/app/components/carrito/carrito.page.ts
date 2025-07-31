import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonChip, IonButton, IonRow, IonCol, IonFooter, IonGrid, IonNote, IonLabel, IonItem, IonContent, IonThumbnail, IonHeader, IonTitle, IonToolbar, IonList, IonIcon } from '@ionic/angular/standalone';
import { CarritoItem } from 'src/app/models/carrito.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonChip, IonButton, IonRow, IonCol, IonFooter, IonGrid, IonNote, IonList, IonThumbnail, IonLabel, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CarritoPage implements OnInit {
  listaCarrito: CarritoItem[] = [];
  subTotal: number = 0;

  constructor() {}

   ngOnInit() {
    // Productos ficticios
    this.listaCarrito = [
      {
        id: 1,
        nombre: 'Tomates Frescos',
        descripcion: 'Tomates rojos, jugosos y recién cosechados',
        precio: 5.50,
        cantidad: 2,
        unidadMedida: 'kg',
        imageUrl: 'https://images.unsplash.com/photo-1604908177165-21c4d89cfb7e'
      },
      {
        id: 2,
        nombre: 'Papas Blancas',
        descripcion: 'Papas blancas seleccionadas para cocina o freír',
        precio: 3.20,
        cantidad: 3,
        unidadMedida: 'kg',
        imageUrl: 'https://images.unsplash.com/photo-1617113766801-952e6b9df442'
      },
      {
        id: 3,
        nombre: 'Huevos de Campo',
        descripcion: 'Huevos orgánicos de gallinas libres',
        precio: 1.80,
        cantidad: 12,
        unidadMedida: 'unidad',
        imageUrl: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2'
      }
    ];

    // Calcular subtotal
    this.subTotal = this.listaCarrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

}
