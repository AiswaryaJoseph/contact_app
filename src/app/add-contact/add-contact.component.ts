import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/model/myContact';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

allGroups:any[]=[]
contactName:string='' //var
contact:MyContact={} //object

  constructor(private api:ApiService, private router:Router){
    this.contact.groupId="Select A Group"
  }

  ngOnInit():void{
    this.api.getAllGroups().subscribe((data:any) =>{
      console.log(data);  //rray(3)0: {id: '1', name: 'family'}1: {id: '2', name: 'company'}2: {id: '3', name: 'friends'}length: 3[[Prototype]]: Array(0)
      this.allGroups=data; //array of data of groups
    })
    }

    // add contact fn
    addContact(){
this.api.addContact(this.contact).subscribe((data:any) =>{
  this.router.navigateByUrl('')
  
})

}    
  

}
