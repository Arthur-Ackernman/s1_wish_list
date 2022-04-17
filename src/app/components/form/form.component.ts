import { Component, OnInit } from '@angular/core';
import { Destino } from './../../models/destino.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  destinos: Destino[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }

  guardar(a:String, b:String):boolean {
    this.destinos.push(new Destino(a, b));
    return false;
  }

}
