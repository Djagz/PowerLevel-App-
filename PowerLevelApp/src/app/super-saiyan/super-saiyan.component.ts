import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() superSaiyanPower: Number;
  updatePower: Number;

  ngOnChanges(){
  	if(this.superSaiyanPower){
  		this.updatePower = Number(this.superSaiyanPower) * 90;
  	}
  }



}
