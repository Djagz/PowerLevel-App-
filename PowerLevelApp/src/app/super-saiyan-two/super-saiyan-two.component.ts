import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() superSaiyan2Power: Number;
  updatePower: Number;

  ngOnChanges(){
  	if(this.superSaiyan2Power){
  		this.updatePower = Number(this.superSaiyan2Power) * 150
  	}
  

}
}
