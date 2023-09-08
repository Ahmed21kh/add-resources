import { ModuleWithProviders, NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppService } from '../services/app.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { langReducer, profileReducer, bookingReducer, schedualeReducer } from '../shared/store/resource-reducer';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    isolate: false
}),
StoreDevtoolsModule.instrument({ maxAge: 25 , logOnly: environment.production,autoPause:true }),
StoreModule.forRoot({language:langReducer,profile:profileReducer,booking:bookingReducer,schedule:schedualeReducer}, {}),
EffectsModule.forRoot([])
  ],
  exports: [TranslateModule],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [AppService]
    }
  }
}
