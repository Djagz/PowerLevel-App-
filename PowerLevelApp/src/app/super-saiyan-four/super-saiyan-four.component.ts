import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() superSaiyan4Power: Number;
  updatePower: Number;

  ngOnChanges(){
  	if(this.superSaiyan4Power){
  		this.updatePower = Number(this.superSaiyan4Power) * 500
  	}

}
}
