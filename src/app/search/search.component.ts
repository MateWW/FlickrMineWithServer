import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

import { SearchService } from './search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search:FormControl

  constructor( private service : SearchService) { 
    service.search("Code Mine");
    this.search = new FormControl("Code Mine");
    
    this.search.valueChanges
      .filter( (text) => (text.length > 2) )
      .distinctUntilChanged()
      .debounceTime(400)
      .subscribe( text => service.search( text ) )
  }

  ngOnInit() {    
  }

}
