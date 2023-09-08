import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Store } from '@ngrx/store';
import { Language } from './shared/store/resource.model';
import { getLang } from './shared/store/resource-selectors';
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
  ngOnInit(): void {
   this.store.select(getLang).subscribe(lang => {
    this.language = lang;
   })
  }


}
