import { Subscription, Observable } from "rxjs";
import { OnDestroy } from "@angular/core";

export abstract class ComponentBase implements OnDestroy {

  set subs(subscription: Subscription) {
    this.subscriptions.add(subscription);
  }

  private subscriptions = new Subscription();

  constructor() {};

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  protected subscribe<T>(service: Observable<T>,
    resultFn: (result: T) => void,
    errorFn?: (error: any) => void) {
    this.subs = service.subscribe(resultFn, errorFn || this.errorHandler);
  }

  /**
   * Generic error errorHandler
   * Can be override by passing third parameter to subscribe()
   */
  private errorHandler(error) {
    // TODO: generic error handling
  }
}

/* Implementation in component is going to be some thing like */
/**
 * 
 * const product$ = this.productService.getProduct(productId);
 * this.subscribe(product$, product => {
 *  // handle product
 * })
 * 
 * // optionally errorHandler can be passed
 * this.subscribe(product$, product => {
 *  // handle product
 * }, (error) => {
 *  // handle error
 * })
 * 
 * No need to unsubscribe explicitly in ngOnDestroy()
 * No need to type ngOnDestroy() as well
 * No need to use any rxjs operator like take(1), or takeUntil(...)
 * No need to include subsink third party library
 */