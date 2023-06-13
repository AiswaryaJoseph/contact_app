import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  contactId:string='';
  contact:any

  groupId:string=''
  groupName:string=''
  //variable creation, datatype- string,inital value empty string
 constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

 ngOnInit():void{


  this.activatedRoute.params.subscribe((data:any) =>{
    console.log(data);//{contactId:'c1'}- object
    this.contactId=data.contactId;
    console.log(this.contactId); //c1
    

    // api call
     // api call
  this.api.viewContact(this.contactId).subscribe((data:any) => {
    console.log(data);
    this.contact=data
    this.groupId=data.groupId//3
    console.log(this.contact);//particular contact details


    //function of api call-group name
this.api.getGroupName(this.groupId).subscribe((data:any) =>{
  console.log(data);  //{id: '3', name: 'friends'}
  this.groupName=data.name;
  console.log(this.groupName);// 'friends'
  
  
})

    
  })
    
  })

 
 }

 
}
