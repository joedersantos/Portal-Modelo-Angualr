import { Injectable } from '@angular/core';
import { CarroModel } from './Carro.Model';

@Injectable()
export class HomeService {

  constructor() { }

  getHomeItens(): CarroModel[] {
    const carros: CarroModel[] = [
      {marca: 'Ford', modelo: 'Mustangue', valor: 'R$150.000,00'},
      {marca: 'Ford', modelo: 'F1000', valor: 'R$40.000,00'},
      {marca: 'FIAT', modelo: '147', valor: 'R$1.200,00'},
      {marca: 'BMW', modelo: '320', valor: 'R$180.500,00'},
      {marca: 'Citron', modelo: 'C4 Sport', valor: 'R$45.000,00'},
    ];
    return carros;
  }

}
