export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  perecedero: boolean;
  unidadMedida: string;
  stockActual: number;
  stockMin: number;
  fechaVencimiento: string; // o Date si lo vas a convertir
  popularidad: number;
  etiquetas: string;
  categoriaNombre: string;
  imageUrl: string;
}
