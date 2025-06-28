import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonListHeader, IonCard, IonItem, IonList, IonCardHeader, IonCardTitle, IonNavLink, IonGrid, IonCol, IonRow, IonNav } from '@ionic/angular/standalone';
import { Categoria } from 'src/app/models/categoria.model';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductosPage } from '../productos/productos.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow]
})
export class HomePage implements OnInit{

  listCategorias: Categoria[] = [];
  categoriaService = inject(CategoriaService);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarCategorias();
  }

  component = ProductosPage;

  cargarCategorias() {
    this.categoriaService.getCategory().subscribe({
      next: (data) => {this.listCategorias = data, console.log(data)}
    })
  }

  verProductos(id: number, nombre: string) {
  this.categoriaService.setIdCategoria(id);
  this.categoriaService.setNombreCategoria(nombre);
  this.router.navigate(['/tabs/productos'])
}
}
