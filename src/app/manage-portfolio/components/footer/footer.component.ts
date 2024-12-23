import { Component } from '@angular/core';
import { UserDataService } from '../../../user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  userLoggedin:boolean = false;
  currentRoute: string = '';
  ngOnInit(): void {
    // Check if the user is logged in when the component is initialized
    this.userLoggedin = this.userDataService.isLoggedIn();
  }
  constructor(private userDataService: UserDataService, private router: Router,activatedRoute:ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }
}
