import { Subscription, Observable } from "rxjs";
import { OnDestroy } from "@angular/core";

export abstract class ComponentBase implements OnDestroy {

  private subscriptions = new Subscription();

  constructor() {};

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  protected subscribe(service: Observable<any>,
    resultFn: (result) => void) {
    this.subscriptions.add(
      service.subscribe(resultFn, () => this.errorHandler)
    );
  }

  /**
   * Generic error errorHandler
   * Can be overriden for specific use.
   * One can change the implementation of error handling
   * here if want handle it with catchError() operator
   * or in custome ErrorHandler
   */
  protected errorHandler(error) {
    // TODO: generic error handling
  }
}