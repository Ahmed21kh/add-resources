import { ModuleWithProviders, NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppService } from '../services/app.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { langReducer, profileReducer, bookingReducer, schedualeReducer, profileSuccessReducer } from '../shared/store/resource-reducer';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { changeProfileSucsess } from '../shared/store/resource-actions';
import { ResourceEffects } from '../shared/store/resource-effects';
import { NgIconsModule } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { NzMessageModule } from 'ng-zorro-antd/message';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [],
  imports: [
    NzMessageModule,
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
StoreModule.forRoot({language:langReducer,profile:profileReducer,booking:bookingReducer,schedule:schedualeReducer,profileSuccess:profileSuccessReducer}, {}),
EffectsModule.forRoot([ResourceEffects]),
NgIconsModule.withIcons({ featherAirplay, heroUsers })
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
