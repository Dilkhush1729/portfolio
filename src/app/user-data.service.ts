// src/app/userData.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  storeUserData(userData: { name: string, email: string, password: string }) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  getUserData(email: string) {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.email === email) {
      return userData;
    }
    return null;
  }
}
