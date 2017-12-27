import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';  //import FormsModule
import {HttpModule} from '@angular/http';    //import HttpModule


import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SuperSaiyanComponent } from './super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './super-saiyan-four/super-saiyan-four.component';


@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //Include FormsModule in our AppModules
    HttpModule    //Include HttpModule in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
