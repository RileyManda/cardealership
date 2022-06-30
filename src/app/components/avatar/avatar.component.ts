import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  template:  ` <div id='element'>
  <span class="e-avatar e-avatar-xlarge e-avatar-circle grey">RB</span>
</div> `
})
export class AvatarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
