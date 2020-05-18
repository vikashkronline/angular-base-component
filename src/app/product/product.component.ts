import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '../base.component';
import { ProductService } from '../app.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends ComponentBase implements OnInit {

  constructor(private productService: ProductService) {super()}

  ngOnInit() {
    const product$ = this.productService.getProduct(123);
    this.subscribe(product$, product => {
      // handle product
    });
  }

  /**
   * No need to type extra code for adding subscriptions
   * No need to type RxJs operator like take(1), or takeUntil(…)
   * No need to include SubSink third party library
   * No need to unsubscribe explicitly
   * No need to type ngOnDestroy() at all
   */

  /**
   * overriding errorHandler method is optional
   * declare it only for handling specific to this component
   */
  protected errorHandler(error) {
    // TODO: generic error handling
  }

}