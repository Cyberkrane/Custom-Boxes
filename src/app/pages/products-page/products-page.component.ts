import { Component } from '@angular/core';
import { Caja } from '../../interfaces/products.interface';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  
  title: string = 'custom boxes';

  cajas: Caja[] = [
    {
        id: 1,
        name: 'Caja 1',
        price: 100,
        modelo: 'Modelo 1',
        image: '../../../assets/imgs/box1.png',
        description: 'Altura: 60cm, Ancho: 30cm, Largo: 50cm; caton corrugado simple.'
    },
    {
        id: 2,
        name: 'Caja 2',
        price: 200,
        modelo: 'Modelo 2',
        image: '../../../assets/imgs/box2.png',
        description: 'Altura: 30cm, Ancho: 30cm, Largo: 30cm; caton corrugado simple.'
    },
    {
        id: 3,
        name: 'Caja 3',
        price: 300,
        modelo: 'Modelo 3',
        image: '../../../assets/imgs/box3.png',
        description: 'Altura: 45cm, Ancho: 30cm, Largo: 45cm; caton corrugado simple.'
    },
    {
        id: 4,
        name: 'Caja 4',
        price: 400,
        modelo: 'Modelo 4',
        image: '../../../assets/imgs/box4.png',
        description: 'Altura: 30cm, Ancho: 60cm, Largo: 30cm; caton corrugado simple.'
    },
    {
        id: 5,
        name: 'Caja 5',
        price: 500,
        modelo: 'Modelo 5',
        image: '../../../assets/imgs/box5.png',
        description: 'Altura: 45cm, Ancho: 45cm, Largo: 45cm; caton corrugado simple.'
    },
    {
        id: 6,
        name: 'Caja 6',
        price: 600,
        modelo: 'Modelo 6',
        image: '../../../assets/imgs/box6.png',
        description: 'Altura: 70cm, Ancho: 40cm, Largo: 40cm; caton corrugado simple.'
    },
    {
        id: 7,
        name: 'Caja 7',
        price: 700,
        modelo: 'Modelo 7',
        image: '../../../assets/imgs/box7.png',
        description: 'Altura: 35cm, Ancho: 50cm, Largo: 50cm; caton corrugado simple.'
    }
   
]

addToCart(caja: any,) {
  console.log(caja);
}
}
