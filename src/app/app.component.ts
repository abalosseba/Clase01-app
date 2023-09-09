import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase01-app';
  titulo: string ='Ejercicio Clase 1'
  ejercio1: string ='Calculos de edades'
  edad1:number = 0;
  edad2:number = 0;
  suma:number = 0;
  promedio: number = 0;

  calcular(){
    this.suma= this.edad1+this.edad2;
    this.promedio=this.suma/2
  }
limpiar(){
  this.edad1= 0;
  this.edad2= 0;
  this.suma = 0;
  this.promedio = 0;
}
}
