import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Language, Schedules, SchedulesData, TimeRangeData } from 'src/app/shared/store/resource.model';
import { getLang } from 'src/app/shared/store/resource-selectors';
import { of } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {
  switchValue:string =''
  options = ['إعدادات تقليدية', 'إعدادات متقدمة'];
  startTime:string  = "";
  copy:boolean = false
  endTime:string  = "";
  arrayForm!:FormArray
  formDetails!:FormGroup
  days:SchedulesData[] = [
    {
    isExist:false,
    isCopy:false ,
    day:"Sat",
    startTime:null,
    endTime:null,
    timeRange:[]
  },
  {
    isExist:true,
    isCopy:false ,
    day:"Sun",
    startTime:null,
    endTime:null,
    timeRange:[]
  },
  {
    isExist:true,
    isCopy:false ,
    day:"Mon",
    startTime:null,
    endTime:null,
    timeRange:[]
  },
  {
    isExist:true,
    isCopy:false ,
    day:"Tue",
    startTime:null,
    endTime:null,
    timeRange:[]
  },
  {
    isExist:true,
    day:"Wed",
    isCopy:false ,
    startTime:null,
    endTime:null,
    timeRange:[]
  },
  {
    isExist:true,
    isCopy:false ,
    day:"Thu",
    startTime:null,
    endTime:null,
    timeRange:[]
  },
  {
    isExist:false,
    isCopy:false ,
    day:"Fri",
    startTime:null,
    endTime:null,
    timeRange:[]
  },
]
  daysAr:string[] = []
  language:string = "en";
  timeRange!:FormArray;
  constructor(private fb:FormBuilder ,private store:Store<Language>,private appService:AppService) {

  }
  // public schedualForm = this.fb.group({
  //   scheduleData:this.fb.array([
  //     this.fb.group({
  //       day:new FormControl(''),
  //       timeRange:this.fb.array([
  //         this.fb.group({
  //           startTime:new FormControl(''),
  //           endTime:new FormControl('')
  //         })
  //       ])
  //     })
  //   ])
  // })

  @Input() scheduleForm!:FormGroup ;
  get s(){
    return  this.scheduleForm.controls
  }
get getData():FormArray{
  return this.scheduleForm.get('schedualeData') as FormArray
}
  ngOnInit(): void {
    this.arrayForm = this.scheduleForm.get('schedualeData') as FormArray
    this.days.map((data:SchedulesData) =>{
     let obj = new FormGroup({
        day:new FormControl(data.day),
        isExist: new FormControl(data.isExist),
        isCopy: new FormControl(data.isCopy),
        startTime: new FormControl(data.startTime,Validators.required),
        endTime : new FormControl(data.endTime,Validators.required),
        timeRange:new FormArray([])
      })
      this.arrayForm.push(obj)
    })

   this.store.select(getLang).subscribe(lang =>{
    this.language = lang;
   })

    // arr.push(this.days)

  }
  timeRangeData(form:any){
    return form.controls.timeRange.controls
  }

  // get timeRange (): FormArray {
  //   return this.formDetails.get('timeRange') as FormArray
  // }
// get getTimeRange():FormArray{
//   console.log(this.arrayForm.get('timeRange'));

//   return this.arrayForm.get('timeRange') as FormArray
// }

  // public timeForm = new FormGroup({
  //   day: new FormControl(''),
  //   startTime: new FormControl(''),
  //   endTime: new FormControl(''),
  //   timeRange:new FormArray([])
  // })
  // public schedualForm =  this.fb.group({
  //   day:[''],
  //   timeRange:this.fb.array([])

  // })
  handleChangeSwitch(d:any){
    console.log(d);
    if (!this.daysAr.includes(d)) {
        this.daysAr.push(d);
    }else{
     let index=  this.daysAr.findIndex((day:any)=>day ==d )
     this.daysAr.splice(index,1);
    }

  }
   addNewTimeRange(e:any,i:number){
    //  console.log("indexOfDay",item.errors);
     let item = (this.scheduleForm.get('schedualeData') as FormArray).controls[i]
     console.log(item);
      let timeRange = item.get('timeRange') as FormArray


    // this.timeRange = item.get('timeRange') as FormArray
    console.log(this.timeRange);
    let obj = new FormGroup({
      startTime:new FormControl(item.get('startTime')?.value),
      endTime:new FormControl(item.get('endTime')?.value)
    })
    timeRange?.push(obj)
   }

   removeTimeRange(e:any,i:number,index:number){
    // console.log("indexOfTimeRange",i);
    let item = (this.scheduleForm.get('schedualeData') as FormArray).controls[i]
    console.log(item);
     let timeRange = item.get('timeRange') as FormArray
     timeRange.removeAt(index);
    // this.dispatchScheduleData(Arr)

   }
  handleCopy(e:any,item:any){
    console.log(item);
    item.get('isCopy')?.setValue(!item.get('isCopy').value)
  }
  handleChangeStartTime(e:any,i:number){
    console.log( moment(e).format("hh:mm A"));

    if (e !== null) {
      this.days[i].startTime = moment(e,"hh:mm A")
    }else {
      this.days[i].startTime = ''
    }

  }
  handleChangeEndTime(e:any,i:number){
    if (e !== null) {

      this.days[i].endTime = moment(e,"hh:mm A")
    }else {
      this.days[i].endTime = ''
    }
  }

  dispatchScheduleData(data:any){
    this.appService.changeSchedualeData({
      schedualeData:data
    })
  }
  changeStartTimeRange(e:any,i:number,ind:number){

  }
  changeEndTimeRange(e:any,i:number,ind:number){

  }

}
