import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginObj:any = {
    "username": "",
    "password": "",
  };

  http = inject(HttpClient);

  constructor(private router:Router){

  }

  onLogin() {
    //debugger;
    this.http.post("https://dummyjson.com/auth/login", this.loginObj).subscribe((res:any)=>{
      //debugger;
      if(res.accessToken) {
       // alert("Login Success");
        localStorage.setItem("grupoFirma", this.loginObj.User);
        localStorage.setItem('id', res.id);
        localStorage.setItem('username', res.username);
        localStorage.setItem('email', res.email);
        localStorage.setItem('firstname', res.firstName);
        localStorage.setItem('lastname', res.lastName);
        localStorage.setItem('gender', res.gender);
        localStorage.setItem('image', res.image);
        localStorage.setItem('token', res.refreshToken);
        localStorage.setItem('LoginUser', JSON.stringify(res));
        
        this.router.navigateByUrl("dashboard")
      } if (res.accessToken == null) {
        alert("Check User Name or Password")
      }
    })
  }

}
