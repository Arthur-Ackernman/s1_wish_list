import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Destino } from 'src/app/models/destino.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() destino:Destino | any;
  @HostBinding ('attr.class') cssClass = 'col-md-4';
  constructor() {
  }

  ngOnInit(): void {
  }

}
