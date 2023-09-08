import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Store } from '@ngrx/store';
import { getBookingData, getLang, getProfileData, getSchadualeData } from '../shared/store/resource-selectors';
import { Booking, Language, Profile, Schedules } from '../shared/store/resource.model';
import {TranslateService} from "@ngx-translate/core";
import Swal from 'sweetalert2';
import * as moment from 'moment';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements  OnInit{
  active:boolean = false;
  profileData!:any
  bookingData!:any
  language:string = "en";
  scheduleData!:any
  constructor(private store: Store<Language>,private appService:AppService,private translate: TranslateService) {

  }



  ngOnInit(): void {

  }

  saveChanges(){

    this.appService.getPofileData().subscribe(data => {
      console.log(data);
      this.profileData = data;

    })
    this.appService.getBookingData().subscribe(data => {
      console.log(data);
      this.bookingData = data;

    })
    this.appService.getSchedulesData().subscribe(data => {
      console.log(data);
      this.scheduleData = data;

    })

    Swal.fire(''
      ,
      `
      <div style="display:flex;flex-direction:column;gap:20px;direction:${this.language == "en"?'ltr':'rtl'};justify-content:center;">
      <img style="width:100px;border-radius:50px;margin:0 auto;" src="${this.profileData.img}" alt="" />
      <h2 style="font-size:18px;">${this.appService.translateWords("resource-name")} : ${this.profileData.resourcesName}</h2>
      <span style="font-size:16px;">${this.appService.translateWords("resource-type")} : ${this.profileData?.resourceType}</span>

      </div>
      <div style="border:1px solid #ccc; padding:0 10px; height:0px;width:100%;margin:20px 0;"></div>
      <div style="direction:${this.language == "en"?'ltr':'rtl'};display:flex;flex-direction:column;gap:20px;" >
       <h2>${this.language == "en"?'Booking Data':'بيانات الحجز'}</h2>
        <span style="font-size:18px;">${this.appService.translateWords("resource-avaliable-to")} : ${this.bookingData.avelabelityCount} ${this.bookingData.periodType}</span>
        <span style="font-size:18px;">${this.appService.translateWords("resource-time")} : ${this.bookingData.resourceTime} ${this.bookingData.resourceTime == 'الوقت ثابت'? `(${this.bookingData.timeQuantity +' '+ this.appService.translateWords("minute")})`:''}</span>
        <span style="font-size:18px;">${this.appService.translateWords("multi-booking")} : ${this.bookingData.manyBooking} ${this.bookingData.manyBooking == 'حجز واحد فقط'?'':`(${this.bookingData.bookingCount})`}</span>
      </div>
      <div style="border:1px solid #ccc; padding:0 10px; height:0px;width:100%;margin:20px 0;"></div>
      <div style="direction:${this.language == "en"?'ltr':'rtl'};display:flex;flex-direction:column;gap:20px;" >
       <h2>${this.language == "en"?'Working Hours':'مواعيد العمل'}</h2>
        ${this.scheduleData.schedualeData?.length > 0?
          this.scheduleData?.schedualeData?.map((data:any)=>`
          <div  style="display:flex;align-items:top;gap:20px;justify-content:center;flex-direction:column;">
             <h3 id="${data?.day}" >${this.appService.translateWords("days."+data?.day)} :</h3>
             ${data.timeRange?.map((time:any,index:number)=>
              `
               <div style="display:flex;align-items:center;flex-direction:row;justify-content:center;gap:30px;flex-direction:column;">
                <span style=" font-size:18px;">${this.appService.translateWords("start-time")} : ${moment(time.startTime).format("hh:mm A")}</span>
                <span style=" font-size:18px;">${this.appService.translateWords("end-time")} : ${moment(time.endTime).format("hh:mm A")}</span>
               </div>
              `
             )}
          </div>
         `
        ):``}
      </div>
      `

    )
  //   alert(
  //   this.profileData?.resourcesName +
  // this.profileData?.resourceType);
  }

  changeActive (){
   this.active =!this.active
  }

  changeLang(value: string)   {
    // this.language = value;
    this.appService.changeLang(value)
    this.appService.getLanguage().subscribe(lang => {
      console.log(lang)
      this.language = lang;
      this.translate.use(lang);

    })
    // this.store.select(getLang).subscribe(lang =>{

    // }
    //    )
  }
}
