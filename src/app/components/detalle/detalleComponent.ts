import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle-component',
  templateUrl: './detalleComponent.html',
  styleUrls: ['./detalleComponent.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class detalleComponent {
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
