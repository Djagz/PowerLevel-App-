import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Level Game';



  powerLevel: Number;

  power: Number;

  onCalculatePower(){
  	this.power = this.powerLevel;
  }



}
 
 
