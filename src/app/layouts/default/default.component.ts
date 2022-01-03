import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sidebarStatus=true;
  constructor() { }

  ngOnInit(): void {}
  toggleSidebar(){
    this.sidebarStatus=!this.sidebarStatus;
  }

}
