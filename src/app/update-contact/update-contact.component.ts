import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/model/myContact';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{

  contactId:string=''
  contact:MyContact={}
  
  group:MyGroup[]=[] as MyGroup[]

constructor(private activatedRoute:ActivatedRoute, private api:ApiService,private route:Router){}

ngOnInit():void{
this.activatedRoute.params.subscribe((data:any)=>{
  console.log(data);  //{Id: 'c1'}
  console.log(data.Id);  //c1

    this.contactId=data['Id'];
  console.log(this.contactId);

  this.api.viewContact(this.contactId).subscribe((data:any) =>{
    console.log(data);  //{id: 'c2', name: 'Sam', email: 'sam@gmail.com', company: 'ABC Company', phone: '987646646', …}
    

    this.contact=data
  })
  this.api.getAllGroups().subscribe((data:any) =>{
    console.log(data); //

    this.group=data
    
  })


})
}

updateContact(){
  this.api.updateContact(this.contactId, this.contact).subscribe((data:any) =>{
    // console.log(data);
this.route.navigateByUrl('')
    
  })
}


}
