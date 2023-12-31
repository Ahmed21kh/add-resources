import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  imageUrl: string | ArrayBuffer | null = "assets/Images/user2.png";
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

 @Input() profileForm!:FormGroup ;


get p(){
  return  this.profileForm.controls
}
 changeResourceType(e:any){
  console.log(this.profileForm.value);
 console.log(e);
 this.resoureType = e;
//  this.dispatchProfileData()

 }
 changeResourceName (e:any){
  console.log(e);
  this.resourceName = e;
  // this.dispatchProfileData()
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
        console.log(e.target?.result );

        this.imageUrl = e.target?.result || null;
        // this.dispatchProfileData ()
        this.profileForm.patchValue({
          imageUrl: this.imageUrl,
          resourceName: this.profileForm.value.resourceName,
          resourceType:this.profileForm.value.resourceType
        })
        console.log(this.profileForm.value);
      };

      reader.readAsDataURL(file);
    }
  }
}
