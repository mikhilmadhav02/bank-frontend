import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

  iscollapse:boolean=true

  collapse(){
    this.iscollapse=!this.iscollapse
  }

}
