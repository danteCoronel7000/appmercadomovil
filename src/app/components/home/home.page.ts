import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabButton, IonTabBar, IonTabs, IonLabel, IonListHeader, IonCard, IonItem, IonList, IonCardHeader, IonCardTitle, IonNavLink } from '@ionic/angular/standalone';
import { Categoria } from 'src/app/models/producto.model';
import { Router, RouterLink } from '@angular/router';
import { ListOfProductsOfCategoryPage } from '../list-of-products-of-category/list-of-products-of-category.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonItem, IonLabel, IonCardHeader, IonList, IonItem, IonCard, IonListHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonNavLink]
})
export class HomePage implements OnInit {

  categorias: Categoria[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarCategorias();
  }

  component = ListOfProductsOfCategoryPage;

  cargarCategorias() {
    // JSON ficticio - después lo reemplazarás con la llamada al backend
       this.categorias = [
      {
        imagen: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
        nombre: 'Carnes'
      },
      {
        imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        nombre: 'Frutas'
      },
      {
        imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
        nombre: 'Verduras'
      },
      {
        imagen: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
        nombre: 'Lacteos'
      },
      {
        imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
        nombre: 'Cereales'
      }
    ];
  }

  verProductos(categoria:Categoria) {
  this.router.navigate(['/tabs/list-of-products-of-category'], {
    queryParams: { id: categoria.nombre }
  });
}
}
