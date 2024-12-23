// src/app/userData.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  storeUserData(userData: { name: string, email: string, password: string, confirmPassword: string, isUserLoggedIn: boolean }) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  storeFormData(formData: {name: string, email: string , phone: string, subject: string, message: string}){

    let storedFormData = JSON.parse(localStorage.getItem('formData') || '[]');

    storedFormData.push(formData);
    
    localStorage.setItem('formData', JSON.stringify(storedFormData));
    console.log("form data : ", storedFormData);
  }

  getUserData(email: string) {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.email === email) {
      return userData;
    }
    return null;
  }

  setUserLoggedIn(email: string) {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData && userData.email === email) {
      userData.isUserLoggedIn = true;
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }

  isLoggedIn(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    return userData && userData.isUserLoggedIn === true;
  }

  logout() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData) {
      userData.isUserLoggedIn = false; 
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }
}
