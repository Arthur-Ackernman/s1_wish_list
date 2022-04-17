import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  list: String[] = [];
  @Input() parmList: String[] = [];
  constructor() {
    this.list = ['item1', 'item2', 'item3', 'item4'];
  }

  ngOnInit(): void {
  }

}
