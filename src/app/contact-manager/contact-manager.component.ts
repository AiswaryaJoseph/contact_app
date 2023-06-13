import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent {
allContacts:MyContact[] = [] //initially empty array
heading='Contact Details'


// propety binding
url='https://cdn3d.iconscout.com/3d/premium/thumb/working-employee-4637854-3864100.png'


// System current date and time

loginDate:any

// search

searchKey:string=''

constructor(private api: ApiService){
  this.loginDate=new Date()
}

// ngOnInit() - Angular Lifecycle hook

ngOnInit():void{
 this.getAllContacts()
}
getAllContacts(){
  this.api.getAllContacts().subscribe((data:any) => {
    // api -is the variable created in constructor
    console.log(data);
    this.allContacts=data;
    
  })
}


nameChange(){
  alert('name change')
}
search(event:any){
  console.log(event.target.value);
this.searchKey=event.target.value; 
  
}

deleteContact(contactId:any){
  this.api.deleteContact(contactId).subscribe((data:any)=>{
    alert("deleted")  // to see if this function is working
this.getAllContacts();
  })
} 
}
