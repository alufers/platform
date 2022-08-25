import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgReduxRouter } from './router';

@NgModule()
export class NgReduxRouterModule {
  static forRoot(): ModuleWithProviders<NgReduxRouterModule> {
    return {
      ngModule: NgReduxRouterModule,
      providers: [NgReduxRouter],
    };
  }
}
