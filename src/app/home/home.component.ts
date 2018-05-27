import { CarroModel } from './Carro.Model';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public carros: CarroModel[];

  constructor( private homeService: HomeService) { }

  ngOnInit() {
    this.carros = this.homeService.getHomeItens();

  }

}
