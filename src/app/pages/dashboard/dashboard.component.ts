
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanActivateFn, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  router = inject(Router);  
    username1: any;
    id1: any;
    email1: any;
    firstName1: any;
    lastName1: any;
    gender1: any;
    image1: any;
    token1: any;

  
    constructor() {
      const username = localStorage.getItem("username");
      const id = localStorage.getItem("id");
      const email = localStorage.getItem("email");
      const firstname = localStorage.getItem("firstname");
      const lastname = localStorage.getItem("lastname");
      const gender = localStorage.getItem("gender");
      const image = localStorage.getItem("image");
      const token = localStorage.getItem("token");
  
      if (username != null) {
        this.username1 = username;
        this.id1 = id;
        this.email1 = email;
        this.firstName1 = firstname;
        this.lastName1 = lastname;
        this.gender1 = gender;
        this.image1 = image;
        this.token1 = token;

      }
    }


    logout() {
      localStorage.removeItem('grupoFirma');
      localStorage.removeItem('id');
      localStorage.removeItem('email');
      localStorage.removeItem('firstname');
      localStorage.removeItem('lastname');
      localStorage.removeItem('image');
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('LoginUser');
      localStorage.removeItem('gender');
      localStorage.removeItem('username');

      this.router.navigateByUrl('login')

    }

    
      redirectTo404(): void {
       this.router.navigate(['/not-found']);
      }

}


