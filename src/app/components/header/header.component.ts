import { Component, OnInit, HostListener, HostBinding, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router)  { }
  ngOnInit() {
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

  onClickButton(){
    console.log("btnclicked");
  }
  gotToLogin=  () => {
    this.router.navigateByUrl('/login');
};



}
