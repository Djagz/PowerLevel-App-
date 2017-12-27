import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() superSaiyan3Power: Number;
  updatePower: Number;

  ngOnChanges(){
  	if(this.superSaiyan3Power){
  		this.updatePower = Number(this.superSaiyan3Power) * 250
  	}
  

}
}