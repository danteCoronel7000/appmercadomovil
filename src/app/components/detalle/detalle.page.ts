import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonHeader, IonTitle, IonToolbar, IonCol, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonRow, IonButtons, IonBackButton, IonImg, IonCardSubtitle, IonChip, IonLabel, IonFooter, IonButton, IonContent } from '@ionic/angular/standalone';
import { Producto } from 'src/app/models/producto.model';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CommonModule, IonCardContent, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonHeader, IonTitle, IonToolbar, CommonModule, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonTitle, IonToolbar, CommonModule, IonCol, IonRow, IonImg, IonCardSubtitle, IonChip, IonLabel, IonFooter, IonButton, IonContent]
})
export class DetallePage implements OnInit {

productoService = inject(ProductoService);
  producto: Producto | null = null;
  cantidad: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const navigation = history.state;
    if (navigation && navigation.producto) {
      this.producto = navigation.producto;
    } else {
      // Manejo si se accede directamente sin estado
    }
    this.getProductoById();
  }

  sumarCantidad() {
    this.cantidad++;
  }

  getProductoById(){
    this.productoService.getProductoById(this.productoService.idProducto()).subscribe({
      next: (res)=>{this.producto = res, console.log('producto: ',res)}
    })
  }

  restarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  agregarAlCarrito() {
    console.log(`Añadido: ${this.cantidad} x ${this.producto?.nombre}`);
    // Aquí iría lógica para enviar al carrito
  }

}
