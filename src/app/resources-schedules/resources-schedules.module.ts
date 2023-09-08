import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesComponent } from './schedules/schedules.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { SharedModule } from '../shared-module/shared-module.module';
@NgModule({
  declarations: [
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzButtonModule,
    NzRadioModule,
    NzGridModule,
    FormsModule,
    ReactiveFormsModule,
    NzSegmentedModule,
    NzTimePickerModule,
    NzSwitchModule,
    NzIconModule,
    NzSpaceModule,
    SharedModule.forRoot()
  ],
  exports:[
    SchedulesComponent
  ]
})
export class ResourcesSchedulesModule { }
