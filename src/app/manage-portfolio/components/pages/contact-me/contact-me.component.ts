import { Component } from '@angular/core';
import { UserDataService } from '../../../../user-data.service';

@Component({
  selector: 'app-contact-me',
  standalone: false,
  
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  constructor(private userDataService: UserDataService) { }
 
  formData = { name: '', email: '', phone: '' , subject: '', message: ''};

  sendFormData(){
    this.userDataService.storeFormData(this.formData);
    alert('Message Send Successfully');
    this.formData = { name: '', email: '', phone: '' , subject: '', message: ''};
  }
}
