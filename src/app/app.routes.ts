import { Routes } from '@angular/router';
import { TabsPage } from './components/tabs/tabs.page';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/explorar',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: TabsPage, // <-- Aquí va tu tabs.page.ts
    children: [    
      {
        path: 'explorar',
        loadComponent: () => import('./components/explorar/explorar.page').then(m => m.ExplorarPage)
      },
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
        path: 'productos',
        loadComponent: () => import('./components/productos/productos.page').then(m => m.ProductosPage)
      },
      {
        path: '',
        redirectTo: '/tabs/explorar',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'detalle',
    loadComponent: () => import('./components/detalle/detalle.page').then(m => m.DetallePage)
  }
];
