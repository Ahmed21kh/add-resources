import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  @Input() bookingForm!:FormGroup;
  get b(){
    return  this.bookingForm.controls
  }
   changeAvelabelityCount (e:number) {
    console.log(e);
    this.avelabelityCount = e;
    // this.dispatchBookingData()
   }
   changePeriodType(e:string){
     console.log(e);
     this.periodType = e;
    // this.dispatchBookingData()

   }
   changeResourceTime (e:string) {
    console.log(e);
    this.resourceTime = e;
    // this.dispatchBookingData()


   }
   changeManyBooking (e:string) {
    console.log(e);
    this.manyBooking = e;
    // this.dispatchBookingData()


   }
   changeBookingCount (e:number) {
    console.log(e);
    this.bookingCount = e;
    // this.dispatchBookingData()


   }
   increaseTime (){
    this.timeQuantity+=1
    console.log(this.bookingForm.value);

    this.bookingForm.setValue({
      timeQuantity: this.timeQuantity ,
      avelabelityCount: this.bookingForm.value.avelabelityCount,
      bookingCount : this.bookingForm.value.bookingCount,
      manyBooking: this.bookingForm.value.manyBooking,
      resourceTime : this.bookingForm.value.resourceTime,
      periodType : this.bookingForm.value.periodType

    })
    // this.dispatchBookingData()

   }
   decreaseTime(){
    if(this.timeQuantity>0){
      this.timeQuantity-=1
   this.bookingForm.setValue({
      timeQuantity: this.timeQuantity,
      avelabelityCount: this.bookingForm.value.avelabelityCount,
      bookingCount : this.bookingForm.value.bookingCount,
      manyBooking: this.bookingForm.value.manyBooking,
      resourceTime : this.bookingForm.value.resourceTime,
      periodType : this.bookingForm.value.periodType

    })
    // this.dispatchBookingData()

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
