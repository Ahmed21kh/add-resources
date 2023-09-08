import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/services/app.service';
import { getLang } from 'src/app/shared/store/resource-selectors';
import { Language } from 'src/app/shared/store/resource.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  demoValue = 3;
  avelabelityCount: number = 1;
  periodType :string = 'شهر'
  radioValue:string = ''
  resourceTime:string = 'وقت الخدمة'
  manyBooking:string = 'حجز واحد فقط'
  bookingCount:number = 1
  language:string = "en";
  timeQuantity:number = 0
  constructor(private fb:FormBuilder ,private store:Store<Language>,private appService:AppService) {

  }
  ngOnInit(): void {
    this.store.select(getLang).subscribe(lang =>{
     this.language = lang;
    })
   }
   changeAvelabelityCount (e:number) {
    console.log(e);
    this.avelabelityCount = e;
    this.dispatchBookingData()
   }
   changePeriodType(e:string){
     console.log(e);
     this.periodType = e;
    this.dispatchBookingData()

   }
   changeResourceTime (e:string) {
    console.log(e);
    this.resourceTime = e;
    this.dispatchBookingData()


   }
   changeManyBooking (e:string) {
    console.log(e);
    this.manyBooking = e;
    this.dispatchBookingData()


   }
   changeBookingCount (e:number) {
    console.log(e);
    this.bookingCount = e;
    this.dispatchBookingData()


   }
   increaseTime (){
    this.timeQuantity+=1
    this.dispatchBookingData()

   }
   decreaseTime(){
    if(this.timeQuantity>0){

      this.timeQuantity-=1
    this.dispatchBookingData()

    }
   }
  
   dispatchBookingData(){
    this.appService.changeBookingData({
      avelabelityCount:this.avelabelityCount,
      periodType:this.periodType,
      resourceTime:this.resourceTime,
      manyBooking:this.manyBooking,
      timeQuantity:this.timeQuantity,
      bookingCount:this.bookingCount
    })
   }
}
