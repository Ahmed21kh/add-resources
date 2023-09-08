import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ResourcesProfileModule } from './resources-profile/resources-profile.module';
import { ResourcesBookingModule } from './resources-booking/resources-booking.module';
import { ResourcesSchedulesModule } from './resources-schedules/resources-schedules.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { StoreModule } from '@ngrx/store';
import { bookingReducer, langReducer, profileReducer, schedualeReducer } from './shared/store/resource-reducer';
import { SharedModule } from './shared-module/shared-module.module';
import { EffectsModule } from '@ngrx/effects';
registerLocaleData(en);

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    ResourcesProfileModule,
    ResourcesBookingModule,
    ResourcesSchedulesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzSpaceModule,
    NzButtonModule,
    NzSwitchModule,
    NzIconModule,
    NzGridModule,
    NzDropDownModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({language:langReducer,profile:profileReducer,booking:bookingReducer,schedule:schedualeReducer}, {}),
    SharedModule.forRoot(),
    EffectsModule.forRoot([])

  ],
  providers: [HttpClient, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
