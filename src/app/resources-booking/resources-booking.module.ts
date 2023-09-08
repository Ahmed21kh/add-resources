import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SharedModule } from '../shared-module/shared-module.module';
@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    NzUploadModule,
    NzInputModule,
    NzButtonModule,
    NzRadioModule,
    NzGridModule,
    FormsModule,
    NzInputNumberModule,
    NzSelectModule,
    SharedModule.forRoot()
  ],
  exports:[
    BookingComponent
  ]
})
export class ResourcesBookingModule { }