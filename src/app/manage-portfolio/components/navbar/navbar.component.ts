import { Component } from '@angular/core';
import { UserDataService } from '../../../user-data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  userLoggedin:boolean = false;
  currentRoute: string = '';
  constructor(private userDataService: UserDataService, private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }
  
  ngOnInit(): void {
    // Check if the user is logged in when the component is initialized
    this.userLoggedin = this.userDataService.isLoggedIn();
  }
  // < === Logout logic === >
  logout() {
    this.userDataService.logout();
    alert('Logged out successfully');
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
  login(){
    this.router.navigate(['']); 
  }
}
