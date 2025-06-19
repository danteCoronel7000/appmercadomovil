import { Routes } from '@angular/router';
import { TabsPage } from './components/tabs/tabs.page';


export const routes: Routes = [
 {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: TabsPage, // <-- Aquí va tu tabs.page.ts
    children: [
      {
        path: 'home',
        loadComponent: () => import('./components/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'carrito',
        loadComponent: () => import('./components/carrito/carrito.page').then(m => m.CarritoPage)
      },
      {
        path: 'mi-perfil',
        loadComponent: () => import('./components/mi-perfil/mi-perfil.page').then(m => m.MiPerfilPage)
      },
      {
        path: 'list-of-products-of-category',
        loadComponent: () => import('./components/list-of-products-of-category/list-of-products-of-category.page').then(m => m.ListOfProductsOfCategoryPage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ]
  }
];
