import { createAction, props } from "@ngrx/store";
import { Booking, Profile, Schedules } from "./resource.model";

// export const  = createAction("increcent")
// export const decrement = createAction("decrement")
// export const reset = createAction("reset")
export const changeLang = createAction("changeLang", props<{ value: string  }>())
export const changeProfile = createAction("changeProfile", props<{ value: Profile}>())
export const changeBooking = createAction("changeBooking", props<{ value: Booking}>())
export const changeScheduale = createAction("changeScheduale", props<{ value: Schedules}>())

