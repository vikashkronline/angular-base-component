

export class ProductService {
  getProduct(productId) {
    return of();
  }
}

import { Component, OnInit } from '@angular/core';
import { ComponentBase } from './base.component';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ProductService]
})

export class AppComponent implements OnInit  {
  name = 'Angular';

  constructor() {}

  ngOnInit() {
    
  }
}
