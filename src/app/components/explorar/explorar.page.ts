import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonRow, IonGrid, IonButtons, IonBackButton, IonIcon, IonSelect, IonSelectOption, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: true,
  imports: [RouterLink, IonCardContent, IonButtons, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow, IonIcon, IonSelect, IonSelectOption, IonSearchbar, IonButton]
})
export class ExplorarPage implements OnInit {
  listaProductos: Producto[] = [];

  productosService = inject (ProductoService);

  constructor() { 
    addIcons({ arrowBackOutline });
    this.getAllProductos();
  }

  ngOnInit() {
  }

  getAllProductos(): void{
    this.productosService.getAllProductosDto().subscribe({
      next: (response) =>{this.listaProductos = response}
    })
  }

}
