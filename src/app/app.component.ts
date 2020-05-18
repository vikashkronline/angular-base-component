

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
  providers: [ ProductService ]
})

export class AppComponent extends ComponentBase implements OnInit  {
  name = 'Angular';

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit() {
    const product$ = this.productService.getProduct(123);
    this.subscribe(product$, product => {
      // handle product
    });

    // optionally also errorHandler can be passed
    this.subscribe(product$, product => {
      // handle result
    },
    error => {
      // handle error
    });
  }

  /* 
  * No need to unsubscribe explicitly in ngOnDestroy()
  * No need to type ngOnDestroy() as well
  * No need to use any rxjs operator like take(1), or takeUntil(...)
  * No need to include subsink third party library
  */
}
