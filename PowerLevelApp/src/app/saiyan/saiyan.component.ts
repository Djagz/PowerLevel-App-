import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }


  @Input() saiyanPower: Number;
  updatePower: Number;

  ngOnChanges(){

  	if(this.saiyanPower){
  		this.updatePower = Number(this.saiyanPower) * 10;
  	}

  }

}
