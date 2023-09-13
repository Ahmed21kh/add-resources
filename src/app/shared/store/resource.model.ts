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
  startTime:Date | unknown,
  endTime:Date | unknown,
  timeRange:object[]
}export interface TimeRangeData{
  startTime:Date | unknown,
  endTime:Date | unknown,
}
