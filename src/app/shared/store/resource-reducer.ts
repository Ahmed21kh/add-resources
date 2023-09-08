import { createReducer, on } from "@ngrx/store";
import { initialBookingState, initialLangState, initialProfileState, initialScheduleState } from "./resource-states";
import { changeBooking, changeLang, changeProfile, changeScheduale } from "./resource-actions";

export const languageReducer = createReducer(initialLangState,
    on(changeLang, (state,action) => {
      console.log({...state}, action);

        return {
            ...state,
            language: action.value
        };
    })
)
export const _profileReducer = createReducer(initialProfileState,
  on(changeProfile, (state,action) => {
    console.log({...state}, action);

      return {
          ...state,
          img: action.value.img,
          resourcesName: action.value.resourcesName,
          resourceType: action.value.resourceType
      };
  })
)

export const _schedualeReducer = createReducer(initialScheduleState,
  on(changeScheduale, (state,action) => {
    console.log({...state}, action);

      return {
          ...state,
          schedualeData: action.value.schedualeData
      };
  })
)
export const _bookingReducer = createReducer(initialBookingState,
  on(changeBooking, (state,action) => {
    console.log({...state}, action);

      return {
          ...state,
          avelabelityCount: action.value.avelabelityCount,
          periodType: action.value.periodType,
          resourceTime: action.value.resourceTime,
          manyBooking: action.value.manyBooking,
          timeQuantity: action.value.timeQuantity,
          bookingCount: action.value.bookingCount
      };
  })
)


export function langReducer(state: any, action: any) {
    return languageReducer(state, action);

}
export function profileReducer(state: any, action: any) {
  return _profileReducer(state, action);

}
export function bookingReducer(state: any, action: any) {
  return _bookingReducer(state, action);

}
export function schedualeReducer(state: any, action: any) {
  return _schedualeReducer(state, action);

}
