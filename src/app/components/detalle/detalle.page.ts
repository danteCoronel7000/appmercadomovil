import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonHeader, IonTitle, IonToolbar, IonCol, IonCardHeader, IonCard, IonCardContent, IonRow, IonButtons, IonBackButton, IonImg, IonChip, IonLabel, IonFooter, IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';
import { Producto } from 'src/app/models/producto.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { addOutline, arrowBackOutline, removeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [ RouterLink, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CommonModule, IonCardContent, IonButtons, IonCard, IonCardHeader, IonHeader, IonTitle, IonToolbar, CommonModule, IonCardHeader, IonCard, IonHeader, IonTitle, IonToolbar, CommonModule, IonCol, IonRow, IonImg, IonChip, IonLabel, IonFooter, IonButton, IonContent, IonIcon]
})
export class DetallePage implements OnInit {

productoService = inject(ProductoService);
  producto: Producto | null = null;
  cantidad: number = 1;
  idProducto: number = 0;

  constructor(private route: ActivatedRoute) {
    addIcons({ addOutline, removeOutline, arrowBackOutline});
  }

  ngOnInit() {}

  ionViewWillEnter(){
    this.idProducto = this.productoService.idProducto()
    this.getProductoById();
  }

  sumarCantidad() {
    this.cantidad++;
  }

  getProductoById(){
    this.productoService.getProductoById(this.idProducto).subscribe({
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
