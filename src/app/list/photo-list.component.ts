import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photo-list',
  template: `
    <app-list></app-list>
    <app-paging></app-paging>
  `,
  styles: []
})
export class PhotoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
