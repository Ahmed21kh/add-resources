export interface Language{
  language:string
}

export interface Profile{
  img:string,
  resourcesName:string,
  resourceType:string
}
export interface ProfileSuccess{
message:string
}
export interface Booking{
  avelabelityCount:number,
  periodType:string,
  resourceTime:string,
  manyBooking:string,
  timeQuantity:number,
  bookingCount:number
}
export interface Schedules{
  schedualeData:any[]
}
export interface SchedulesData{
  day:string,
  isExist:boolean,
  isCopy:boolean,
  startTime:string | any,
  endTime:string | any,
  timeRange:object[]
}
export interface TimeRangeData{
  startTime:string |any,
  endTime:string |any,
}
