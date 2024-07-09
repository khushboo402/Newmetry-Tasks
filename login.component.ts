// 
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   loginObj: any = {
//     email: '',
//     password: ''
//   };

//   constructor(private router: Router) { }

//   onLogin() {
//     // Hardcoded user credentials for demo purpose
//     const hardcodedUser = { email: 'test@example.com', password: 'password' };

//     if (this.loginObj.email === hardcodedUser.email && this.loginObj.password === hardcodedUser.password) {
//       // Simulating successful login, storing user data in localStorage
//       localStorage.setItem('FlightUser', JSON.stringify({ email: this.loginObj.email }));
//       this.router.navigateByUrl('/city');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  onLogin() {
    if (this.loginObj.email && this.loginObj.password) {
      // Simulating successful login, storing user data in localStorage
      const loggedInUser = { email: this.loginObj.email };
      this.userService.loginUser(loggedInUser);
      this.router.navigateByUrl('/city');
    } else {
      alert('Please enter both email and password.');
    }
  }
}
