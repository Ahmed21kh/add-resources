import { Booking, Language, Profile, Schedules } from "./resource.model";


export const initialLangState:Language={
  language:"en",

}

export const initialProfileState:Profile={
  img:"assets/Images/user.png",
  resourcesName:"",
  resourceType:"حجز خلال اليوم"
}

export const initialBookingState:Booking={
  avelabelityCount:1,
  periodType:"شهر",
  resourceTime:"",
  manyBooking:"",
  timeQuantity:1,
  bookingCount:1
}

export const initialScheduleState:Schedules={
  schedualeData:[]
}
