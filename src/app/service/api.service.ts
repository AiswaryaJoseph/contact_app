import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/model/myContact';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }


  // function to get all contacts
  getAllContacts():Observable<MyContact>{
return this.http.get(this.baseUrl)
  }
  // function to fetch particular contact
  viewContact(contactId:any){
    return this.http.get(`${this.baseUrl}/${contactId}`)
  
  }
  
getGroupName(groupId:any){
return this.http.get('http://localhost:3000/group/'+groupId)
}

// Function to fetch all groups from localhost:3000/group
getAllGroups(){
  return this.http.get('http://localhost:3000/group')
}

// function for adding new contact to server
addContact(contactBody:any){
  return this.http.post(this.baseUrl,contactBody)
}
// function for deleting
deleteContact(contactId:any){
  return this.http.delete(`${this.baseUrl}/${contactId}`)
}
//function for updating data
updateContact(contactId:any,contactBody:any){
return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
}
}

