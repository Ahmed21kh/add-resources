import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Store } from '@ngrx/store';
import { Language } from './shared/store/resource.model';
import { getLang } from './shared/store/resource-selectors';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  language:string = "en";

  constructor (private translate: TranslateService, private store:Store<Language>){
    this.translate.setDefaultLang("en");
  }

   formdata = new FormGroup({
    profile: new FormGroup({
      imageUrl:new FormControl('',[Validators.required]),
      resourceName:new FormControl('',[Validators.required,Validators.min(4)]),
      resourceType:new FormControl('حجز خلال اليوم',[Validators.required]),

    }),
    booking: new FormGroup({
      avelabelityCount:new FormControl(1,[Validators.required]),
      periodType:new FormControl('شهر',[Validators.required]),
      resourceTime:new FormControl('وقت الخدمة',[Validators.required]),
      manyBooking:new FormControl('حجز واحد فقط',[Validators.required]),
      timeQuantity: new FormControl(0,[Validators.required]),
      bookingCount: new FormControl(1,[Validators.required]),
    }),

    schedualeData:new FormArray([])

   })
   
   get f() {
    return this.formdata.controls
  }
  ngOnInit(): void {
    console.log(this.formdata.value);

   this.store.select(getLang).subscribe(lang => {
    this.language = lang;
   })
  }


}
