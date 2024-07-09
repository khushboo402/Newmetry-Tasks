import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Code that accesses localStorage should be inside this condition
      const userData = localStorage.getItem('user');
      console.log('User Data:', userData);
    } else {
      console.log('Running on the server');
    }
  }
  // ngOnInit() { }
  // loggedUserData: any;
  // constructor(private router: Router) {
  //   const localData = localStorage.getItem('FlightUser');
  //   if (localData != null) {
  //     this.loggedUserData = JSON.parse(localData);
  //   }

  // }

  // logout() {
  //   localStorage.removeItem('FlightUser');
  //   this.router.navigateByUrl('/login')
  // }
}
