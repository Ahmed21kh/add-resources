import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { changeProfile, changeProfileSucsess } from "./resource-actions";
import { exhaustMap, map, of } from "rxjs";

@Injectable()
export class ResourceEffects{


  constructor(private action$:Actions){}

  profile$ = createEffect(()=>this.action$.pipe(
  ofType(changeProfile),
  exhaustMap((action)=>
  of(action).pipe(
    map(()=>changeProfileSucsess())
  ))
  ))

}
