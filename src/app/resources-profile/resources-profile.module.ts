import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NzUploadModule,
    NzInputModule,
    NzButtonModule,
    NzRadioModule,
    NzGridModule,
    SharedModule.forRoot()
  ],
  exports:[
    ProfileComponent
  ],
  providers:[]
})
export class ResourcesProfileModule { }
