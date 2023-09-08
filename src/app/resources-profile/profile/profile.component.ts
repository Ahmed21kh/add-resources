import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { getLang } from 'src/app/shared/store/resource-selectors';
import { Language } from 'src/app/shared/store/resource.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = "assets/Images/user.png";
  resoureType = 'حجز خلال اليوم';
  resourceName:string = ""
  language:string = "en";
  constructor(private store: Store<Language>,private appService:AppService , private translate:TranslateService) {

  }

 ngOnInit(): void {
    this.store.select(getLang).subscribe(data => {
       this.language = data;
      console.log(data)}
    )
   let val=  this.translate.get('book-dure-day')
   console.log(val);
   
 }
 changeResourceType(e:any){
 console.log(e);
 this.resoureType = e;
 this.dispatchProfileData()

 }
 changeResourceName (e:any){
  console.log(e);
  this.resourceName = e;
  this.dispatchProfileData()
 }

 dispatchProfileData () {
  this.appService.changeProfileData({
    img:this.imageUrl,
    resourcesName:this.resourceName,
    resourceType:this.resoureType
  })
 }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result || null;
      };

      reader.readAsDataURL(file);
    }
  }
}
