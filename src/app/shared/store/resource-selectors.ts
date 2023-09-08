import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Booking, Language, Profile, Schedules } from "./resource.model";


const getlanguage =createFeatureSelector<Language>('language');
const getProfile =createFeatureSelector<Profile>('profile');
const getBooking =createFeatureSelector<Booking>('booking');
const getScheduale =createFeatureSelector<Schedules>('schedule');

export const getLang=createSelector(getlanguage,(state)=>{

    return state.language;
})
export const getProfileData=createSelector(getProfile,(state)=>{
console.log(state);

  return {
    img:state.img,
    resourcesName:state.resourcesName,
    resourceType:state.resourceType
  }
})
export const getBookingData=createSelector(getBooking,(state)=>{

  return {
    avelabelityCount:state.avelabelityCount,
    periodType:state.periodType,
    resourceTime:state.resourceTime,
    manyBooking:state.manyBooking,
    timeQuantity:state.timeQuantity,
    bookingCount:state.bookingCount
  }
})
export const getSchadualeData=createSelector(getScheduale,(state)=>{

  return {
    schedualeData:state.schedualeData
    }
})
