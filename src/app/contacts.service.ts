import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {


  //HTTP
  getContacts()
  {
    const contactList = [
      {id:1, name:'abcd'},
      {id:2, name:'defg'}
    ];

    return contactList;
  }

  constructor() { }
}
