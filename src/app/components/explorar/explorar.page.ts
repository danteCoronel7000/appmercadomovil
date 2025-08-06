import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonRow, IonGrid, IonButtons, IonBackButton, IonIcon, IonSelect, IonSelectOption, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { ProductoSocketService } from 'src/app/services/producto.socket.service';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: true,
  imports: [RouterLink, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow, IonSearchbar, IonButton]
})
export class ExplorarPage implements OnInit {
  listaProductos: Producto[] = [];

  productosService = inject (ProductoService);
  productoSocketService = inject(ProductoSocketService);

  constructor(private router: Router) { 
    addIcons({ arrowBackOutline });
    this.getAllProductos();
    this.getNewProductByWebSocket();
  }

  ngOnInit() {
  }

  getAllProductos(): void{
    this.productosService.getAllProductosDto().subscribe({
      next: (response) =>{this.listaProductos = response}
    })
  }

  buscarPorNombre(nombre: string): void{
    const value = nombre.trim();//trim() elimina los espacion al principio y al final del string
    if(value){//si value no esta vacio realiza la busqueda
      this.productosService.buscarProducto(value).subscribe({
        next: (response) =>{this.listaProductos = response}
      })
    } else{
      this.getAllProductos();
    }
  }

  getNewProductByWebSocket(): void {
  this.productoSocketService.productoActualizado$.subscribe(producto => {
    console.log('nuevo producto recibido o actualizado', producto);
      const index = this.listaProductos.findIndex(p => p.id === producto.id);//recorremos la lista actual de productos comparando si alngun id de la lista actual coincide con el id del nuevo producto creado

    if (index !== -1) {
      // Ya existe → lo actualizamos
      this.listaProductos[index] = producto;
    } else {
      // No existe → lo agregamos al final
      this.listaProductos.push(producto);
    }
  });
}

  onClearSearch(): void{
    this.getAllProductos();
  }

  detalleAndCarrito(id: number): void {
    this.productosService.setIdProduco(id);
    this.router.navigate(['/detalle'])
  }

}
