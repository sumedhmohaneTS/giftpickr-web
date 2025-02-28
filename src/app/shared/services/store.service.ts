// Angular modules
import { Injectable } from '@angular/core';

// External modules
import { BehaviorSubject } from 'rxjs';

// Internal modules
import { environment } from '@env/environment';

/**
 * Angular Application State Management: You Do (Not) Need External Data Stores like NgRx, Redux, and Other
 * https://www.maestralsolutions.com/angular-application-state-management-you-do-not-need-external-data-stores/
 */
@Injectable()
export class StoreService {
  // NOTE Data
  private readonly _pageTitleSource = new BehaviorSubject<string>(environment.appName);
  private readonly _isLoadingSource = new BehaviorSubject<boolean>(false);

  // NOTE Events
  readonly pageTitle$ = this._pageTitleSource.asObservable();
  readonly isLoading$ = this._isLoadingSource.asObservable();

  constructor
    (
  ) {
  }

  // -------------------------------------------------------------------------------
  // NOTE Page title ---------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public getPageTitle(): string {
    return this._pageTitleSource.getValue();
  }

  public setPageTitle(title: string): void {
    const pageTitle = title;
    this._pageTitleSource.next(pageTitle);
  }

  // -------------------------------------------------------------------------------
  // NOTE Is loading ---------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public getIsLoading(): boolean {
    return this._isLoadingSource.getValue();
  }

  public setIsLoading(state: boolean): void {
    this._isLoadingSource.next(state);
  }

}
