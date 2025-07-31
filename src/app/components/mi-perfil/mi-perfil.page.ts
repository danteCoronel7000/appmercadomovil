import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCardContent, IonCardTitle, IonCardHeader, IonCard,IonAvatar, IonChip, IonButton, IonRow, IonCol, IonFooter, IonGrid, IonNote, IonLabel, IonItem, IonContent, IonThumbnail, IonHeader, IonTitle, IonToolbar, IonList, IonIcon } from '@ionic/angular/standalone';
import { CarritoItem } from 'src/app/models/carrito.model';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
  standalone: true,
  imports: [IonCardContent,IonCardTitle, IonCardHeader, IonCard, IonHeader, IonAvatar, IonChip, IonButton, IonRow, IonCol, IonFooter, IonGrid, IonNote, IonList, IonThumbnail, IonLabel, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MiPerfilPage implements OnInit {
  totalProductos: number = 3;
  subTotal: number = 4; 
irATienda() {
throw new Error('Method not implemented.');
}

confirmarCompra() {
throw new Error('Method not implemented.');
}

eliminarProducto(_t22: CarritoItem) {
throw new Error('Method not implemented.');
}

aumentarCantidad(_t22: CarritoItem) {
throw new Error('Method not implemented.');
}

disminuirCantidad(_t22: CarritoItem) {
throw new Error('Method not implemented.');
}

  productosCarrito: CarritoItem[] = [];

  constructor() { }

     ngOnInit() {
    // Productos ficticios
    this.productosCarrito = [
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
    this.subTotal = this.productosCarrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

}
