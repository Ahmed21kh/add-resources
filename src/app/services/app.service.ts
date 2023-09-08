import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeBooking, changeLang, changeProfile, changeScheduale } from '../shared/store/resource-actions';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Booking, Language, Profile, Schedules } from '../shared/store/resource.model';
import { TranslateService } from '@ngx-translate/core';
import { getBookingData, getLang, getProfileData, getSchadualeData } from '../shared/store/resource-selectors';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private store: Store<Language>,private translate: TranslateService ,private profileStore:Store<Profile>,private bookingStore:Store<Booking>,private scheduleStore:Store<Schedules>) {

  }

  public SendProfileData = new BehaviorSubject<any>('')
  public SendBookingData = new BehaviorSubject<any>('')
  public SendSchedualeData = new BehaviorSubject<any>('')
  // public SendRole = new BehaviorSubject<any>('')
  // public SendExaminId = new BehaviorSubject<any>('')

  changeLang (value:string):void {
    this.store.dispatch(changeLang({ value }));

  }
  changeProfileData(data:Profile | any):void {
    console.log(data);

    this.profileStore.dispatch(changeProfile({value:data}));
  }
  changeBookingData(data:Booking | any):void {
    this.bookingStore.dispatch(changeBooking({value:data}));
  }
  changeSchedualeData(data:Schedules | any):void {
    this.scheduleStore.dispatch(changeScheduale({value:data}));
  }

  getLanguage():Observable<any>{
    let language:any
    this.store.select(getLang).subscribe(lang => {
      console.log(lang);

      language = lang
    })
    return of(language)
  }

  getPofileData():Observable<any>{
    let profileData
    this.profileStore.select(getProfileData).subscribe(profile => {
      console.log(profile);
      profileData = profile;
    })
    return of(profileData)
  }

  getBookingData():Observable<any>{
    let bookingData
    this.bookingStore.select(getBookingData).subscribe(booking => {
      console.log(booking);
      bookingData = booking;
    })
    return of(bookingData)
  }

  getSchedulesData():Observable<any>{
    let schedulesData
    this.scheduleStore.select(getSchadualeData).subscribe(schedule => {
      console.log(schedule);
      schedulesData = schedule;
    })

    return of(schedulesData)
  }

  translateWords(key: string):any {
   let translatedValue
    this.translate.get(key).subscribe(res =>translatedValue = res )
    return translatedValue
  }



  SendProfileDataToComponent(data: any) {
    return this.SendProfileData.next(data)
  }
  SendBookingDataToComponent(data: any) {
    return this.SendBookingData.next(data)
  }
  SendSchedualeDataToComponent(role: any) {
    return this.SendSchedualeData.next(role)
  }

}
