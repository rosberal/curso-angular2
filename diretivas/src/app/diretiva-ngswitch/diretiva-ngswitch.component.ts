import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})


export class DiretivaNgswitchComponent implements OnInit {
aba: string = 'home';
urlImagem1: string = "./../../assets/images/imagem1.jpg";
urlImagem2: string = "./../../assets/images/imagem2.jpg";
urlImagem3: string ="./../../assets/images/imagem3.jpg";
  constructor() { }

  ngOnInit() {
  }

}
