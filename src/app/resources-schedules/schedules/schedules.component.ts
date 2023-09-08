import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Language, Schedules } from 'src/app/shared/store/resource.model';
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
  days:any[] = [
    {
    isExist:false,
    isCopy:false ,
    day:"Sat",
    startTime:'',
    endTime:'',
    timeRange:[]
  },
  {
    isExist:true,
    isCopy:false ,
    day:"Sun",
    startTime:'',
    endTime:'',
    timeRange:[]
  },
  {
    isExist:true,
    isCopy:false ,
    day:"Mon",
    startTime:'',
    endTime:'',
    timeRange:[]
  },
  {
    isExist:true,
    isCopy:false ,
    day:"Tue",
    startTime:'',
    endTime:'',
    timeRange:[]
  },
  {
    isExist:true,
    day:"Wed",
    isCopy:false ,
    startTime:'',
    endTime:'',
    timeRange:[]
  },
  {
    isExist:true,
    isCopy:false ,
    day:"Thu",
    startTime:'',
    endTime:'',
    timeRange:[]
  },
  {
    isExist:false,
    isCopy:false ,
    day:"Fri",
    startTime:'',
    endTime:'',
    timeRange:[]
  },
]
  daysAr:string[] = []
  language:string = "en";
  timeRange!:FormArray;
  constructor(private fb:FormBuilder ,private store:Store<Language>,private appService:AppService) {

  }
  public schedualForm = this.fb.group({
    scheduleData:this.fb.array([
      this.fb.group({
        day:new FormControl(''),
        timeRange:this.fb.array([
          this.fb.group({
            startTime:new FormControl(''),
            endTime:new FormControl('')
          })
        ])
      })
    ])
  })



  ngOnInit(): void {
   this.store.select(getLang).subscribe(lang =>{
    this.language = lang;
   })
    let arr= this.schedualForm.get("scheduleData")as FormArray
    console.log(arr);
    // arr.push(this.days)

  }



  public timeForm = new FormGroup({
    day: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    timeRange:new FormArray([])
  })
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
    console.log("indexOfDay",i);
    console.log(this.days[i].timeRange);
    let obj = {
      startTime:this.days[i].startTime,
      endTime: this.days[i].endTime
    }
    // this.days[i].timeRange.unshift(obj);

    this.days[i].timeRange = [...this.days[i].timeRange,obj]
    let Arr = this.days.filter((d:any) => d.isExist && d.timeRange.length >0).map((data:any) =>{return {
      day:data.day,
      timeRange:data.timeRange
    }})
    console.log(Arr);
    this.dispatchScheduleData(Arr)
    // this.days[i].startTime = ''
    // this.days[i].endTime = ''

    console.log(this.days[i].timeRange);

   }
   removeTimeRange(e:any,item:any,index:number){
    // console.log("indexOfTimeRange",i);
    console.log(this.days[index].timeRange);
      this.days[index].timeRange = [...this.days[index].timeRange.filter((data:any)=> data !== item )]
    //  this.days[index].timeRange.splice(i, 1)

     let Arr = this.days.filter((d:any) => d.isExist && d.timeRange.length >0).map((data:any) =>{return {
      day:data.day,
      timeRange:data.timeRange
    }})
    console.log(Arr);
    this.dispatchScheduleData(Arr)

   }
  handleCopy(e:any,i:number){
    console.log(i);
   this.days[i].isCopy = !this.days[i].isCopy
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
    if (e !== null) {

      this.days[i].timeRange[ind].startTime = moment(e,"hh:mm A")
    }else {
      this.days[i].timeRange[ind].startTime = ''
    }
  }
  changeEndTimeRange(e:any,i:number,ind:number){
    if (e !== null) {

      this.days[i].timeRange[ind].endTime = moment(e,"hh:mm A")
    }else {
      this.days[i].timeRange[ind].endTime = ''
    }
  }

}
